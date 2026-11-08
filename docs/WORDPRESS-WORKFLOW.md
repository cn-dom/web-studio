# WordPress radni tijek u Web Studiju

Web Studio služi isključivo za planiranje i izradu WordPress web stranica. Katalog tema nalazi se na `wordpress.html`.

## Preporučene besplatne teme

| Tema | Besplatna osnova | Službeni izvor |
|---|---|---|
| Blocksy | Da; dio Starter Sites dizajna je Pro | https://wordpress.org/themes/blocksy/ |
| Astra | Da; dio Starter Templates dizajna je Pro | https://wordpress.org/themes/astra/ |
| Kadence | Da; dio predložaka i funkcija je Pro | https://wordpress.org/themes/kadence/ |
| GeneratePress | Da; napredne funkcije i Site Library mogu zahtijevati Premium | https://wordpress.org/themes/generatepress/ |
| Neve | Da; dio početnih dizajna i funkcija je Pro | https://wordpress.org/themes/neve/ |
| Twenty Twenty-Five | Da, službena block tema | https://wordpress.org/themes/twentytwentyfive/ |

Katalog je početni izbor, a ne jamstvo da je svaki Starter Site besplatan. Prije instalacije provjeriti oznake, potrebne dodatke, licence fotografija, fontova i demo sadržaja.

## Kako izraditi stranicu

1. Pokrenuti novu lokalnu stranicu u WordPress Studio ili otvoriti WordPress instalaciju na hostingu.
2. U WordPress nadzornoj ploči otvoriti **Izgled → Teme → Dodaj novu** i instalirati odabranu temu.
3. Instalirati službeni dodatak koji tema zahtijeva ili preporučuje, ako je potreban za uvoz.
4. Otvoriti biblioteku Starter Sites / Starter Templates unutar WordPressa.
5. Odabrati samo predložak označen kao besplatan i provjeriti potrebne dodatke.
6. Uvesti predložak na novu ili sigurnosno kopiranu instalaciju.
7. Zamijeniti demo sadržaj stvarnim tekstovima i fotografijama klijenta, podesiti kontakt, SEO, privatnost i mobilni prikaz.

## Granice trenutne verzije

Web Studio se objavljuje kao statična GitHub Pages aplikacija. Ona može prikazati katalog i upute, ali ne može sama pokretati PHP, WordPress bazu podataka ili instalirati teme na udaljeni hosting. WordPress radi zasebno u WordPress Studio ili na hostingu. Izravno upravljanje lokalnom WordPress instalacijom zahtijevat će budući lokalni most/desktop integraciju.

## Pravila

- Ne označavati plaćeni predložak kao besplatan.
- Ne kopirati tuđe teme ili demo sadržaj u repozitorij bez provjere licence.
- Ne unositi pristupne podatke klijenata u Web Studio ili Git.
- Svaki klijentski projekt držati u zasebnoj WordPress instalaciji ili jasno izoliranom okruženju.
- Prije uvoza na postojeću stranicu napraviti sigurnosnu kopiju.


## Web Studio Blocksy Starter

U repozitoriju je vlastita child tema s originalnim Gutenberg uzorcima. Ne redistribuira Blocksy ni tuđe demo stranice.

- Tema: [wordpress/themes/web-studio-blocksy-starter](../wordpress/themes/web-studio-blocksy-starter/README.md)
- Blueprint poslovna stranica: [blocksy-poslovna-stranica.json](../wordpress/blueprints/blocksy-poslovna-stranica.json)
- Blueprint kamenoklesarstvo: [blocksy-kamenoklesarstvo.json](../wordpress/blueprints/blocksy-kamenoklesarstvo.json)
- Blueprint apartmani: [blocksy-apartmani.json](../wordpress/blueprints/blocksy-apartmani.json)

### Pokretanje Blueprinta u WordPress Studio

1. Preuzmi jedan JSON Blueprint iz repozitorija.
2. U WordPress Studio odaberi **Add site → Upload**.
3. Odaberi JSON datoteku i pokreni izradu nove lokalne stranice.
4. Blueprint instalira besplatnu Blocksy temu, Blocksy Companion i Web Studio child temu.
5. Kreira početne stranice: Početna, Usluge, O nama i Kontakt.
6. Uređuj sadržaj u WordPressu. Zamijeni ogledne tekstove, podatke i fotografije stvarnim podacima klijenta.

Blueprinti dohvaćaju temu iz WordPress.org, a Web Studio child temu iz ovog GitHub repozitorija. Za ovu prvu verziju koristi ih za **nove lokalne projekte**, ne za postojeće produkcijske stranice. Prije stvarnog klijentskog projekta treba potvrditi uspješan uvoz u instaliranoj verziji WordPress Studio i provjeriti sve stranice nakon uvoza.
