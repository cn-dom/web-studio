(() => {
 const $=s=>document.querySelector(s);
 const choice=$('#blueprint-choice'), start=$('#start-wordpress'), frame=$('#wordpress-frame');
 const status=$('#runtime-status'), statusWrap=$('.studio-status'), loading=$('#frame-loading');
 const workspace=$('#wordpress-workspace');
 const queryTemplate=new URLSearchParams(window.location.search).get('template');
 if(queryTemplate&&['business','stone','apartments','blank'].includes(queryTemplate))choice.value=queryTemplate;
 const blueprints={
  business:'https://raw.githubusercontent.com/cn-dom/web-studio/main/wordpress/blueprints/blocksy-poslovna-stranica.json',
  stone:'https://raw.githubusercontent.com/cn-dom/web-studio/main/wordpress/blueprints/blocksy-kamenoklesarstvo.json',
  apartments:'https://raw.githubusercontent.com/cn-dom/web-studio/main/wordpress/blueprints/blocksy-apartmani.json'
 };
 const labels={business:'Poslovna web stranica',stone:'Kamenoklesarstvo',apartments:'Apartmani i turizam',blank:'Novi WordPress projekt'};
 let activeSlug=null, loadTimer=null, launched=false;
 function setStatus(message,ready=false){status.textContent=message;statusWrap.classList.toggle('is-ready',ready);}
 function makeUrl(path='/wp-admin/'){
  const params=new URLSearchParams({mode:'seamless',storage:'browser','site-slug':activeSlug,language:'hr',php:'8.4',wp:'latest',url:path});
  if(blueprints[choice.value])params.set('blueprint-url',blueprints[choice.value]);
  return 'https://playground.wordpress.net/?'+params.toString();
 }
 function showLoad(message){
  loading.innerHTML='<span class="loader"></span><b>'+message+'</b><small>WordPress se pokreće unutar ovog prozora. Prvo pokretanje može potrajati.</small>';
  loading.classList.remove('is-hidden');
 }
 function navigate(path,button){
  if(!launched||!activeSlug)return;
  document.querySelectorAll('[data-go]').forEach(item=>item.classList.toggle('active',item===button));
  showLoad('Otvaramo WordPress…');
  setStatus('Učitavanje WordPress stranice…');
  frame.src=makeUrl(path);
 }
 frame.addEventListener('load',()=>{
  if(!launched)return;
  clearTimeout(loadTimer);
  loading.classList.add('is-hidden');
  setStatus('WordPress Playground je učitan',true);
  $('#site-mode').textContent='WORDPRESS U PREGLEDNIKU';
 });
 frame.addEventListener('error',()=>{
  clearTimeout(loadTimer);
  setStatus('Greška pri učitavanju WordPressa');
  showLoad('WordPress se nije uspio učitati.');
 });
 async function launch(){
  if(launched)return;
  start.disabled=true;start.textContent='Pokretanje…';
  workspace.hidden=false;workspace.scrollIntoView({behavior:'smooth',block:'start'});
  const selected=choice.value;
  activeSlug='web-studio-'+selected+'-'+Date.now().toString(36);
  $('#site-name').textContent=labels[selected];
  showLoad('Pokrećemo WordPress…');
  setStatus('Povezivanje s WordPress Playgroundom…');
  $('#site-mode').textContent='POKRETANJE';
  launched=true;
  frame.src=makeUrl('/wp-admin/');
  loadTimer=setTimeout(()=>{
   if(!loading.classList.contains('is-hidden')){
    setStatus('WordPress se još učitava');
    loading.innerHTML='<b>Učitavanje traje dulje nego očekivano.</b><small>Provjeri internetsku vezu ili pokušaj ponovno. Ako se ovo ponavlja, pošalji mi snimku zaslona.</small><button class="button button-primary" id="retry-wordpress">Pokušaj ponovno</button>';
    $('#retry-wordpress')?.addEventListener('click',()=>{launched=false;frame.src='about:blank';launch();});
   }
  },120000);
  start.disabled=false;start.textContent='＋ Pokreni WordPress projekt';
 }
 start?.addEventListener('click',launch);
 document.querySelectorAll('[data-go]').forEach(button=>button.addEventListener('click',()=>navigate(button.dataset.go,button)));
 $('#restart-wordpress')?.addEventListener('click',()=>{
  if(!confirm('Pokrenuti novi WordPress projekt? Trenutni projekt ostaje spremljen u pohrani preglednika ako je spremanje podržano.'))return;
  launched=false;clearTimeout(loadTimer);frame.src='about:blank';workspace.hidden=true;activeSlug=null;
  setStatus('WordPress okruženje nije pokrenuto');window.scrollTo({top:0,behavior:'smooth'});
 });
 const year=$('#year');if(year)year.textContent=new Date().getFullYear();
})();