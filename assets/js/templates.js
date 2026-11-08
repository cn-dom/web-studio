(() => {
 const PROJECTS='webstudio.projects.v1', EDITOR='webstudio.editor.v1';
 const $=s=>document.querySelector(s); let chosen=null;
 const templates={
 business:{name:'Poslovna prezentacija',type:'Poslovna web stranica',category:'business',sections:[
 ['hero','DOBRO DOŠLI','Ideje pretvaramo u rezultate.','Predstavljamo iskustvo, pouzdanost i rješenja prilagođena vašem poslovanju.','Upoznajte nas','#e9e8df','#202a25'],
 ['about','O NAMA','Partner za vaš sljedeći korak.','Upoznajte naš tim, pristup radu i vrijednosti na kojima gradimo dugoročne odnose.','','#f4f1e9','#26332d'],
 ['services','NAŠE USLUGE','Rješenja za vaše poslovanje.','Od prvog razgovora do završne izvedbe — podrška na svakom koraku.','Zatražite ponudu','#dce5df','#20332d'],
 ['testimonials','POVJERENJE','Rezultati koji govore za nas.','„Profesionalna suradnja, jasna komunikacija i kvalitetna izvedba.”','','#e9e8df','#202a25'],
 ['contact','KONTAKT','Razgovarajmo o vašim ciljevima.','Telefon: +385 00 000 000\nE-pošta: info@primjer.hr\nAdresa: Hrvatska','Pošaljite upit','#243a38','#f5f3eb'],
 ['footer','','VAŠA TVRTKA','© 2026 Sva prava pridržana.','','#172b2a','#f5f3eb']]},
 stone:{name:'Kamen i obrada',type:'Poslovna web stranica',category:'business',sections:[
 ['hero','KAMEN KOJI TRAJE GENERACIJAMA','Prirodna ljepota. Precizna izrada.','Obrada prirodnog kamena uz iskustvo, kvalitetne materijale i pažnju prema detaljima.','Pogledajte radove','#d8d5cc','#242b27'],
 ['about','NAŠA RADIONICA','Kamen oblikovan s iskustvom.','Predstavite svoju radionicu, tradiciju, strojeve i način rada. Svaki projekt zaslužuje preciznu izvedbu.','','#eeece5','#292d29'],
 ['services','ŠTO RADIMO','Od ideje do završne obrade.','Obrada granita i mramora, izrada elemenata po mjeri te montaža na lokaciji.','Zatražite ponudu','#c9d0c8','#28312c'],
 ['gallery','NAŠI RADOVI','Pogledajte kvalitetu izbliza.','Predstavite nadgrobne spomenike, kuhinjske ploče, stepenice i ostale izvedene projekte.','','#dedbd2','#292d29'],
 ['contact','KONTAKT','Dogovorimo vaš projekt.','Telefon: +385 00 000 000\nE-pošta: info@kamen.hr\nRadionica: Hrvatska','Pošaljite upit','#293632','#f5f3eb'],
 ['footer','','KAMEN I OBRADA','© 2026 Sva prava pridržana.','','#172b2a','#f5f3eb']]},
 restaurant:{name:'Restoran i ugostiteljstvo',type:'Restoran / ugostiteljstvo',category:'hospitality',sections:[
 ['hero','OKUS KOJI OKUPLJA','Dobro došli za naš stol.','Sezonski sastojci, pažljivo pripremljena jela i atmosfera u kojoj se osjećate kao kod kuće.','Istražite meni','#efe5d4','#3b281f'],
 ['about','NAŠA PRIČA','Kuhinja s karakterom.','Predstavite priču restorana, lokalne namirnice, kuhara i filozofiju kuhinje.','','#f6eee2','#3b281f'],
 ['services','PONUDA','Za svaki dobar trenutak.','Doručak, ručak, večera, proslave i posebne prigode.','Pogledajte ponudu','#e6d6c1','#432e23'],
 ['gallery','IZ NAŠE KUHINJE','Mirisi i okusi na jednom mjestu.','Dodajte fotografije jela, prostora i posebnih trenutaka.','','#f0e7da','#3b281f'],
 ['contact','REZERVACIJE','Rezervirajte svoj stol.','Telefon: +385 00 000 000\nE-pošta: info@restoran.hr\nAdresa: Hrvatska','Kontaktirajte nas','#573a2b','#fff5e8'],
 ['footer','','DOBRO DOŠLI','© 2026 Sva prava pridržana.','','#2c211b','#fff5e8']]},
 apartments:{name:'Apartmani i turizam',type:'Drugo',category:'hospitality',sections:[
 ['hero','VAŠ ODMOR POČINJE OVDJE','Usporite. Udahnite more.','Otkrijte mjesto za odmor, mir i lijepe uspomene. Upoznajte naš smještaj i okolicu.','Otkrijte smještaj','#d9e5df','#203c3b'],
 ['about','DOBRO DOŠLI','Osjećajte se kao kod kuće.','Predstavite apartmane, sadržaje, opremljenost i posebnosti lokacije.','','#eff3eb','#29413d'],
 ['services','PREDNOSTI','Sve za bezbrižan odmor.','Udoban smještaj, blizina plaže, privatni parking i lokalne preporuke.','Provjerite dostupnost','#c5ddd6','#244441'],
 ['gallery','SMJEŠTAJ I OKOLICA','Upoznajte svoje mjesto za odmor.','Dodajte fotografije soba, terase, pogleda i zanimljivosti u okolici.','','#dce9e4','#203c3b'],
 ['contact','REZERVACIJE','Veselimo se vašem dolasku.','Telefon: +385 00 000 000\nE-pošta: info@villamare.hr\nLokacija: Hrvatska','Pošaljite upit','#254c4a','#f4f8f2'],
 ['footer','','VILLA MARE','© 2026 Sva prava pridržana.','','#193735','#f4f8f2']]},
 portfolio:{name:'Portfolio i kreativci',type:'Portfolio / osobna stranica',category:'creative',sections:[
 ['hero','NEOVISNI KREATIVAC','Stvaram stvari koje imaju smisla.','Predstavljam svoj pristup, ideje i odabrane projekte. Od prve skice do završnog detalja.','Pogledaj radove','#ddd8ce','#25231f'],
 ['about','O MENI','Bok, ja sam vaše ime.','Ukratko predstavite sebe, iskustvo, specijalizaciju i način na koji surađujete s klijentima.','','#efede7','#292722'],
 ['gallery','ODABRANI RADOVI','Ideje pretvorene u projekte.','Dodajte svoje najbolje radove i kratke opise svakog projekta.','','#d7d2c8','#25231f'],
 ['services','SURADNJA','Kako mogu pomoći?','Dizajn, fotografija, kreativna strategija i individualni projekti.','Dogovorimo suradnju','#e8e1d7','#292722'],
 ['contact','JAVITE SE','Imate ideju? Razgovarajmo.','E-pošta: ime@primjer.hr\nTelefon: +385 00 000 000\nHrvatska','Pošalji poruku','#333a35','#f6f1e8'],
 ['footer','','VAŠE IME','© 2026 Sva prava pridržana.','','#222923','#f6f1e8']]},
 shop:{name:'Online trgovina',type:'Web trgovina',category:'commerce',sections:[
 ['hero','PAŽLJIVO ODABRANO','Manje, ali vrijednije.','Otkrijte proizvode koji spajaju kvalitetu, funkcionalnost i dobar dizajn.','Istražite ponudu','#e7e4da','#252d28'],
 ['about','NAŠ IZBOR','Proizvodi s pričom i svrhom.','Predstavite svoju trgovinu, kriterije odabira i vrijednosti brenda.','','#f1efe8','#2b332d'],
 ['services','ZAŠTO KOD NAS','Kupnja bez kompromisa.','Pažljivo odabrani proizvodi, sigurna kupnja i podrška kupcima.','Saznajte više','#d8ded5','#29352c'],
 ['gallery','ISTAKNUTA PONUDA','Izdvojeno iz kolekcije.','Ovdje ćemo prikazati proizvode, fotografije, cijene i poveznice na detalje.','','#e7e4da','#252d28'],
 ['contact','PODRŠKA','Tu smo za vaša pitanja.','E-pošta: trgovina@primjer.hr\nTelefon: +385 00 000 000\nInformacije o dostavi i povratu.','Kontaktirajte nas','#293a32','#f5f3eb'],
 ['footer','','FORMA STORE','© 2026 Sva prava pridržana.','','#1c2d25','#f5f3eb']]}
 };
 function id(){return crypto.randomUUID?crypto.randomUUID():String(Date.now())+'-'+Math.random().toString(36).slice(2);}
 function filter(category){document.querySelectorAll('.library-card').forEach(card=>card.hidden=category!=='all'&&card.dataset.category!==category);document.querySelectorAll('[data-filter]').forEach(b=>b.classList.toggle('active',b.dataset.filter===category));}
 $('#template-filters').addEventListener('click',e=>{const b=e.target.closest('[data-filter]');if(b)filter(b.dataset.filter);});
 document.querySelectorAll('[data-use]').forEach(b=>b.addEventListener('click',()=>{chosen=templates[b.dataset.use];$('#chosen-template-label').textContent=chosen.name+' · '+chosen.sections.length+' početnih sekcija';$('#template-project-name').value=chosen.name;$('#template-modal').classList.add('is-open');$('#template-modal').setAttribute('aria-hidden','false');document.body.style.overflow='hidden';$('#template-project-name').focus();}));
 function close(){const m=$('#template-modal');m.classList.remove('is-open');m.setAttribute('aria-hidden','true');document.body.style.overflow='';}
 document.querySelectorAll('[data-close]').forEach(b=>b.addEventListener('click',close));document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});
 $('#template-form').addEventListener('submit',e=>{e.preventDefault();if(!chosen||!e.currentTarget.reportValidity())return;const data=new FormData(e.currentTarget),now=new Date().toISOString(),projectId=id();let projects=[];try{projects=JSON.parse(localStorage.getItem(PROJECTS)||'[]');if(!Array.isArray(projects))projects=[];}catch{}
 const project={id:projectId,name:String(data.get('name')).trim(),client:String(data.get('client')).trim(),type:chosen.type,status:'plan',notes:'Projekt je započet iz predloška: '+chosen.name,createdAt:now,updatedAt:now};
 const sections=chosen.sections.map(([type,eyebrow,title,text,button,bg,fg])=>({id:id(),type,eyebrow,title,text,button,bg,fg}));
 try{projects.unshift(project);localStorage.setItem(PROJECTS,JSON.stringify(projects));let all=JSON.parse(localStorage.getItem(EDITOR)||'{}');if(!all||typeof all!=='object'||Array.isArray(all))all={};all[projectId]=sections;localStorage.setItem(EDITOR,JSON.stringify(all));}catch{alert('Projekt nije moguće spremiti. Provjerite prostor u pregledniku.');return;}
 close();location.href='editor.html?id='+encodeURIComponent(projectId);
 });
})();