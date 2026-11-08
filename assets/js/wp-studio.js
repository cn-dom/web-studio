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
 let activeSlug=null, loadTimer=null, revealTimer=null, launched=false;
 function setStatus(message,ready=false){status.textContent=message;statusWrap.classList.toggle('is-ready',ready);}
 function makeUrl(path='/wp-admin/'){
  const params=new URLSearchParams({
   mode:'seamless',
   storage:'browser',
   php:'8.4',
   wp:'latest',
   url:path,
   login:'yes',
   networking:'yes',
   language:'hr',
   'page-title':'Web Studio WordPress'
  });
  if(blueprints[choice.value])params.set('blueprint-url',blueprints[choice.value]);
  return 'https://playground.wordpress.net/?'+params.toString();
 }
 function showLoad(message,detail='WordPress se pokreće unutar ovog prozora. Prvo pokretanje može potrajati.'){
  loading.innerHTML='<span class="loader"></span><b>'+message+'</b><small>'+detail+'</small>';
  loading.classList.remove('is-hidden');
 }
 function navigate(path,button){
  if(!launched)return;
  document.querySelectorAll('[data-go]').forEach(item=>item.classList.toggle('active',item===button));
  showLoad('Otvaramo WordPress…');
  setStatus('Učitavanje WordPress stranice…');
  clearTimeout(revealTimer);
  frame.src=makeUrl(path);
 }
 frame.addEventListener('load',()=>{
  if(!launched)return;
  // The iframe load event only confirms that the Playground shell document arrived.
  // It does not mean WordPress/PHP has finished booting.
  setStatus('Playground je otvoren; WordPress se još pokreće…');
  clearTimeout(revealTimer);
  revealTimer=setTimeout(()=>{
   loading.classList.add('is-hidden');
   setStatus('Provjera WordPress prikaza…');
   $('#site-mode').textContent='WORDPRESS PLAYGROUND';
  },12000);
 });
 frame.addEventListener('error',()=>{
  clearTimeout(loadTimer);clearTimeout(revealTimer);
  setStatus('Greška pri učitavanju WordPressa');
  showLoad('WordPress se nije uspio učitati.','Provjeri internetsku vezu i pokušaj ponovno.');
 });
 async function launch(){
  if(launched)return;
  start.disabled=true;start.textContent='Pokretanje…';
  workspace.hidden=false;workspace.scrollIntoView({behavior:'smooth',block:'start'});
  const selected=choice.value;
  activeSlug=null;
  $('#site-name').textContent=labels[selected];
  showLoad('Pokrećemo WordPress…','Učitavamo službeno WordPress Playground okruženje.');
  setStatus('Povezivanje s WordPress Playgroundom…');
  $('#site-mode').textContent='POKRETANJE';
  launched=true;
  clearTimeout(loadTimer);clearTimeout(revealTimer);
  frame.src=makeUrl('/wp-admin/');
  loadTimer=setTimeout(()=>{
   if(!loading.classList.contains('is-hidden')){
    setStatus('WordPress se nije pokrenuo na vrijeme');
    loading.innerHTML='<b>WordPress se još nije prikazao.</b><small>Otvori karticu Pregled stranice ili pokušaj ponovno. Ako se opet pojavi bijeli ekran, pošalji snimku zaslona i poruku iz preglednika (F12 → Console).</small><button class="button button-primary" id="retry-wordpress">Pokušaj ponovno</button>';
    $('#retry-wordpress')?.addEventListener('click',()=>{launched=false;frame.src='about:blank';launch();});
   }
  },90000);
  start.disabled=false;start.textContent='＋ Pokreni WordPress projekt';
 }
 start?.addEventListener('click',launch);
 document.querySelectorAll('[data-go]').forEach(button=>button.addEventListener('click',()=>navigate(button.dataset.go,button)));
 $('#restart-wordpress')?.addEventListener('click',()=>{
  if(!confirm('Pokrenuti novi WordPress projekt? Trenutni privremeni radni prostor može biti izgubljen.'))return;
  launched=false;clearTimeout(loadTimer);clearTimeout(revealTimer);frame.src='about:blank';workspace.hidden=true;activeSlug=null;
  setStatus('WordPress okruženje nije pokrenuto');window.scrollTo({top:0,behavior:'smooth'});
 });
 const year=$('#year');if(year)year.textContent=new Date().getFullYear();
})();