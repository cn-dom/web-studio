(() => {
 const $=s=>document.querySelector(s);
 const choice=$('#blueprint-choice'), start=$('#start-wordpress'), frame=$('#wordpress-frame');
 const status=$('#runtime-status'), statusWrap=$('.studio-status'), loading=$('#frame-loading');
 const workspace=$('#wordpress-workspace');
 const blueprints={
  business:'https://raw.githubusercontent.com/cn-dom/web-studio/main/wordpress/blueprints/blocksy-poslovna-stranica.json',
  stone:'https://raw.githubusercontent.com/cn-dom/web-studio/main/wordpress/blueprints/blocksy-kamenoklesarstvo.json',
  apartments:'https://raw.githubusercontent.com/cn-dom/web-studio/main/wordpress/blueprints/blocksy-apartmani.json'
 };
 let client=null,starting=false;
 const labels={business:'Poslovna web stranica',stone:'Kamenoklesarstvo',apartments:'Apartmani i turizam',blank:'Novi WordPress projekt'};
 function setStatus(message,ready=false){status.textContent=message;statusWrap.classList.toggle('is-ready',ready);}
 async function launch(){
  if(starting)return;
  starting=true;start.disabled=true;start.textContent='Pokretanje…';workspace.hidden=false;workspace.scrollIntoView({behavior:'smooth',block:'start'});
  loading.classList.remove('is-hidden');setStatus('Učitavanje WordPress okruženja…');$('#site-name').textContent=labels[choice.value];
  try{
   const {startPlaygroundWeb}=await import('https://playground.wordpress.net/client/index.js');
   let blueprint;
   if(blueprints[choice.value]){
    const response=await fetch(blueprints[choice.value],{cache:'no-store'});
    if(!response.ok)throw new Error('Nije moguće učitati odabrani početni paket.');
    blueprint=await response.json();
   }else{
    blueprint={landingPage:'/',login:true,preferredVersions:{php:'8.4',wp:'latest'},steps:[{step:'setSiteLanguage',language:'hr'}]};
   }
   client=await startPlaygroundWeb({iframe:frame,remoteUrl:'https://playground.wordpress.net/remote.html',blueprint});
   await client.isReady();
   setStatus('WordPress je spreman',true);
   loading.classList.add('is-hidden');
   $('#site-mode').textContent='POKRENUTO U PREGLEDNIKU';
   document.querySelectorAll('[data-go]').forEach(button=>button.addEventListener('click',async()=>{
    document.querySelectorAll('[data-go]').forEach(item=>item.classList.toggle('active',item===button));
    try{await client.goTo(button.dataset.go);}catch(error){setStatus('Navigacija nije uspjela: '+error.message);}
   }));
  }catch(error){
   loading.innerHTML='<b>WordPress se nije uspio pokrenuti.</b><small>'+String(error.message||error)+'</small><button class="button button-primary" id="retry-wordpress">Pokušaj ponovno</button>';
   $('#retry-wordpress')?.addEventListener('click',()=>{loading.innerHTML='<span class="loader"></span><b>Pokrećemo WordPress…</b><small>Preuzimamo WordPress, temu i početni sadržaj.</small>';launch();});
   setStatus('Greška pri pokretanju');
  }finally{starting=false;start.disabled=false;start.textContent='＋ Pokreni WordPress projekt';}
 }
 start?.addEventListener('click',launch);
 $('#restart-wordpress')?.addEventListener('click',()=>{if(client&&!confirm('Pokrenuti novi projekt? Trenutni radni prostor može biti izgubljen ako nije izvezen.'))return;client=null;frame.src='about:blank';workspace.hidden=true;setStatus('WordPress okruženje nije pokrenuto');window.scrollTo({top:0,behavior:'smooth'});});
 const year=$('#year');if(year)year.textContent=new Date().getFullYear();
})();