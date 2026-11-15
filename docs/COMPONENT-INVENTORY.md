# Inventar WordPress komponenti

Ovaj dokument je početni popis za provjeru. Stavka nije odobrena za instalaciju dok se ne provjere aktivno održavanje, kompatibilnost s aktualnim WordPressom/PHP-om, sigurnosna povijest, licenca i stvarna ograničenja besplatne verzije.

## Temelj sustava

| Komponenta | Namjena | Početna odluka |
|---|---|---|
| WordPress Core | CMS, korisnici, stranice, objave i mediji | Obavezno; službeni izvor |
| Gutenberg / Block Editor | Uređivanje sadržaja blokovima | Koristiti ugrađeni uređivač; dodatni Gutenberg plugin samo ako trebaju novije eksperimentalne mogućnosti |
| WordPress Studio | Lokalno razvojno okruženje | Predloženi alat za Windows; provjeriti aktualne zahtjeve |
| Block Theme | Dizajn cijele stranice i Site Editor | Izraditi vlastitu temu |

## Vizualni dizajn i blokovi

| Projekt | Namjena | Napomena |
|---|---|---|
| MaxiBlocks | Dodatni blokovi, predlošci i dizajnerski resursi | Provjeriti licencu svakog resursa i granice besplatne verzije |
| Frost | Početna blok-tema | Usporediti s vlastitom temom; ne uključivati obje bez razloga |
| WordPress Block Patterns | Gotovi rasporedi blokova | Prednost dati službenim i vlastitim uzorcima |
| Vvveb | Alternativni vizualni CMS/builder | Istražiti odvojeno; nije WordPress dodatak |

## Funkcionalni dodaci koje treba procijeniti

| Kategorija | Kandidati za provjeru | Pravilo |
|---|---|---|
| Trgovina | WooCommerce | Dodati samo kada demonstracijska stranica treba trgovinu |
| Obrasci | Contact Form 7, Forminator, Fluent Forms | Usporediti besplatne mogućnosti; odabrati jedan |
| SEO | The SEO Framework, Yoast SEO, Rank Math | Odabrati jedan |
| Sigurnost | Wordfence, Solid Security | Usporediti opseg besplatne zaštite; odabrati jedan |
| Sigurnosne kopije | UpdraftPlus | Provjeriti besplatno vraćanje i udaljene lokacije |
| Predmemorija/brzina | LiteSpeed Cache ili dodatak primjeren hostingu | Ne uključivati bez poznavanja hostinga |
| Slike | Optimole, EWWW ili druga lokalna alternativa | Provjeriti kvote, vanjske servise i privatnost |
| Antispam | Antispam Bee, Akismet | Provjeriti uvjete i vanjski prijenos podataka |
| Pristupačnost | Accessibility Checker i ručni testovi | Dodatak nije zamjena za stvarnu provjeru |
| Višejezičnost | Polylang | Provjeriti besplatne mogućnosti i ograničenja |
| Analitika | Independent Analytics ili Matomo | Prednost privatnosti i mogućnosti samostalnog hostanja |
| Migracija | Duplicator ili WPvivid | Provjeriti ograničenja veličine i vraćanja |

## Projekti za dodatno istraživanje s GitHub-a

- Webstudio — samostalni vizualni builder; nije WordPress dodatak.
- Silex — vizualni web-builder; nije WordPress dodatak.
- Microweber — zaseban CMS s vizualnim uređivanjem; nije WordPress dodatak.
- Vvveb — zaseban CMS/builder; nije WordPress dodatak.
- WordOps — alat za upravljanje WordPress hostingom; nije dodatak za uređivanje stranice.
- wp-plugin-boilerplate — mogući razvojni predložak za naše dodatke; provjeriti licencu i održavanje.

## Pravila odabira

Za svaku komponentu evidentirati:
1. službeni URL i izvor preuzimanja;
2. licencu i obveze atribucije;
3. datum zadnjeg ažuriranja i aktivnost održavanja;
4. kompatibilnost s WordPressom i PHP-om;
5. besplatne funkcije i zaključane/pro funkcije;
6. vanjske servise, račune, API ključeve i prikupljanje podataka;
7. preklapanje s drugim dodacima;
8. rezultat instalacijskog i funkcionalnog testa.

Statusi: `istražiti`, `odobreno`, `testirati`, `odbijeno`, `instalirano`.

## Prijava, korisnički računi i portal

| Komponenta | Namjena | Početna odluka |
|---|---|---|
| WordPress Core Authentication | Prijava, odjava, sesije, reset lozinke | Koristiti izvorni sustav; ne stvarati vlastitu pohranu lozinki |
| Web Studio Core (vlastiti dodatak) | Uloga klijenta i početni portal | Uključeno u repozitorij; razvojna osnova, testirati prije produkcije |
| Two-factor authentication | Dodatna zaštita administratora i po potrebi klijenata | Odabrati jedan održavan dodatak nakon provjere kompatibilnosti i besplatnih mogućnosti |
| Login rate limiting / bot protection | Zaštita od automatiziranih pokušaja prijave | Uključiti kroz odabrani sigurnosni dodatak ili hosting; ne duplicirati zaštitu |
| E-mail verification | Potvrda adrese prije aktivacije javnog računa | Obvezno prije otvaranja javne registracije |

Detaljna arhitektura, granice odgovornosti i kriteriji prihvaćanja nalaze se u [USER-ACCESS-AND-AUTH.md](USER-ACCESS-AND-AUTH.md).
