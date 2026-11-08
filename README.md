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

## WordPress teme i početni dizajni
- Početni katalog: Blocksy, Astra, Kadence, GeneratePress, Neve i Twenty Twenty-Five.
- Besplatna tema ne znači da su svi njezini Starter Sites predlošci besplatni. Svaki dizajn treba provjeriti zasebno.
- Web Studio na GitHub Pagesu je statičan katalog; WordPress se pokreće u WordPress Studio ili na hostingu.
- Upute za radni tijek: [docs/WORDPRESS-WORKFLOW.md](docs/WORDPRESS-WORKFLOW.md).

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
