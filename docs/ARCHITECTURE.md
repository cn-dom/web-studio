# Arhitektura Web Studija

## 1. Cilj
Web Studio treba omogućiti izradu, prilagodbu, testiranje i predaju profesionalnih web stranica. U prvoj fazi to je razvojni repozitorij i skup standarda, a ne javna SaaS platforma.

## 2. Osnovni princip
WordPress stranice klijenata trebaju biti samostalne instalacije. Ovaj repozitorij čuva zajedničke komponente i postupke, ali ne smije postati mjesto na kojem se miješaju podaci različitih klijenata.

## 3. Slojevi

### Razvojno okruženje
- WordPress Studio za lokalne WordPress instalacije.
- Git i GitHub za verzioniranje.
- GitHub Actions za automatizirane provjere.

### Dizajn
- Sustav boja, tipografije, razmaka i komponenti.
- Responzivni header, navigacija, footer i osnovni layouti.
- Predlošci za različite djelatnosti.
- Animacije samo kada ne narušavaju pristupačnost i brzinu.

### WordPress implementacija
- Teme za izgled i predloške.
- Dodaci za funkcionalnosti koje trebaju biti neovisne o temi.
- Gutenberg/block editor kao početni standard.
- Dodatni vizualni editor razmatra se zasebno.

### Isporuka
- Testna lokalna ili staging instalacija.
- Pregled i odobrenje klijenta.
- Sigurnosna kopija.
- Izvoz i migracija na hosting koji podržava WordPress.
- Dokumentacija za klijenta i dogovor o održavanju.

## 4. Predloženi tijek projekta
1. Prikupiti zahtjeve i sadržaj klijenta.
2. Odabrati odgovarajući početni predložak.
3. Potvrditi strukturu stranica i vizualni smjer.
4. Izraditi stranicu na lokalnom WordPressu.
5. Prilagoditi sadržaj, slike i funkcionalnosti.
6. Testirati desktop, tablet i mobitel.
7. Provjeriti obrasce, poveznice, SEO osnove, pristupačnost i performanse.
8. Predstaviti staging verziju klijentu.
9. Nakon odobrenja napraviti sigurnosnu kopiju i prenijeti stranicu.
10. Predati pristupe i upute te dogovoriti održavanje.

## 5. Granice prve faze
U prvoj fazi ne gradimo:
- vlastiti hosting,
- sustav naplate ili tržište izvođača,
- višekorisnički SaaS,
- vlastiti CMS,
- obvezni GrapesJS editor.

Te mogućnosti mogu doći kasnije, nakon što se potvrdi stvarni proces izrade i isporuke web stranica.
