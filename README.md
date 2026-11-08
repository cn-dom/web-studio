# Web Studio

**Web Studio** je radni prostor isključivo za planiranje i izradu pravih WordPress web stranica za klijente. Katalog besplatnih WordPress tema i početnih predložaka nalazi se na [WordPress biblioteci](wordpress.html).

Cilj je izgraditi ponovljiv i siguran proces: od ideje i dogovora s klijentom, preko dizajna i izrade, do testiranja, predaje i kasnijeg održavanja web stranice.

## Smjer projekta
- Koristiti provjerene postojeće open-source projekte kada to ubrzava razvoj.
- Prilagoditi ili izraditi vlastite teme, dodatke, blokove i predloške kada je potrebno.
- Provjeriti licencu svakog preuzetog dijela prije uključivanja u komercijalni projekt.
- Svaku web stranicu klijenta držati kao zaseban, prenosiv WordPress projekt.
- Prije predaje provjeriti prikaz na mobitelu, performanse, pristupačnost, sigurnost i osnovni SEO.
- Ne vezati klijentske stranice uz jedan hosting ili pružatelja usluga.

## Ugrađeni WordPress Studio
- `wp-studio.html` pokreće WordPress Playground unutar Web Studija, bez otvaranja zasebnog editora.
- Korisnik može pokrenuti poslovni, kamenoklesarski, turistički ili prazni WordPress projekt i uređivati ga u ugrađenoj WordPress nadzornoj ploči.
- Playground je pregledničko radno okruženje; trajni izvoz, sigurnosne kopije i objava na hostingu zasebni su sljedeći koraci.

## WordPress teme i početni dizajni
- Početni katalog: Blocksy, Astra, Kadence, GeneratePress, Neve i Twenty Twenty-Five.
- Besplatna tema ne znači da su svi njezini Starter Sites predlošci besplatni. Svaki dizajn treba provjeriti zasebno.
- Web Studio je statična aplikacija, a ugrađeni WordPress Playground pokreće PHP i WordPress u pregledniku.
- Upute za radni tijek: [docs/WORDPRESS-WORKFLOW.md](docs/WORDPRESS-WORKFLOW.md).

## Blocksy početni paket
- Vlastita besplatna child tema nalazi se u `wordpress/themes/web-studio-blocksy-starter/`.
- Tri WordPress Studio Blueprinta: poslovna stranica, kamenoklesarstvo i apartmani.
- Osam originalnih Gutenberg uzoraka: tri hero dizajna i pet sekcija.
- Paket ne sadrži Blocksy temu, premium dodatke, tuđe demo sadržaje ni stock fotografije.
- Upute: [Blocksy početni paket](wordpress/themes/web-studio-blocksy-starter/README.md).

## Planirane cjeline
| Cjelina | Svrha |
|---|---|
| docs/ | Arhitektura, standardi, postupci i licence |
| themes/ | Vlastite WordPress teme |
| plugins/ | Vlastiti WordPress dodaci |
| templates/ | Ponovno upotrebljivi predlošci i početni dizajni |
| client-projects/ | Upute i struktura za odvojene klijentske projekte |

## Tehnološki smjer
- **WordPress Studio** – lokalno okruženje za razvoj i testiranje WordPress stranica.
- **WordPress** – CMS i blok-urednik kao osnovni način uređivanja sadržaja.
- **GrapesJS** – mogući dodatni vizualni editor; neće biti obvezan dio prve verzije.
- **GitHub** – verzioniranje koda, pregled promjena i automatizirane provjere.
- **Vlastite teme i dodaci** – funkcionalnosti i dizajn koji se mogu održavati i prenositi.

Odabir tehnologije potvrđuje se tek nakon provjere stvarnih potreba i licenci.

## Početak rada
1. Instalirati [WordPress Studio](https://wordpress.com/studio/).
2. Napraviti lokalnu probnu WordPress stranicu.
3. Razvijati i testirati temu ili dodatak u ovom repozitoriju.
4. Prije korištenja u projektu klijenta provjeriti licencu i evidentirati izvor.
5. Testirati izvoz i prijenos na neovisni WordPress hosting.

## Pravila projekta
- Ne uključivati tuđe teme, dodatke, fontove, fotografije ili demo sadržaj bez provjere prava korištenja.
- Ne pohranjivati lozinke, API ključeve ni podatke klijenata u Git.
- Ne mijenjati postojeći klijentski projekt bez sigurnosne kopije i odobrenja.
- Ne označavati projekt spremnim za predaju dok provjere nisu završene.

## Licenca repozitorija
Licenca ovog repozitorija još nije odabrana. Dok se ne odredi, nemojte pretpostaviti da je sadržaj repozitorija slobodan za kopiranje ili redistribuciju. Licence vanjskih ovisnosti i materijala vode se zasebno u THIRD-PARTY-NOTICES.md.
