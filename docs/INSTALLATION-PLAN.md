# Instalacijski plan — Web Studio

## Cilj

Ponovljiva lokalna WordPress instalacija za razvoj i testiranje vlastite teme, dodataka, korisničkih uloga i demonstracijske web-stranice. Lokalno okruženje nije produkcijski hosting.

## Razvojno okruženje

Primarni alat: **WordPress Studio** za Windows. Službena dokumentacija: https://wordpress.studio/docs/

Prema službenoj dokumentaciji Studio radi na 64-bitnom Windowsu, stvara zasebnu lokalnu WordPress instalaciju za svaku stranicu te podržava SSL, lokalne domene, Blueprint predloške, WP-CLI, izvoz i uvoz. Studio može koristiti SQLite za lokalni razvoj; produkcijski hosting treba provjeriti zasebno i uskladiti s njegovom bazom i PHP verzijom.

### Početna lokalna stranica

- Naziv: `Web Studio — razvoj`
- Tip: prazna WordPress stranica
- Jezik: hrvatski
- Vremenska zona: Europe/Zagreb
- Permalinks: naziv objave
- Registracija javnosti: isključena
- Pretraživači: blokirati indeksiranje lokalne razvojne stranice
- Administrator: korisnik kojeg odredi vlasnik računala; lozinka se ne zapisuje u Git
- E-mail: lokalni mail log za testiranje, bez slanja stvarnim korisnicima

### Struktura nakon instalacije

Kopirati/instalirati vlastiti kod u:
- `wp-content/plugins/web-studio-core/`
- `wp-content/themes/web-studio/`

Repozitorij ostaje izvor istine za naš kod. WordPress Core i dodaci trećih strana instaliraju se iz službenih izvora ili kroz WordPress Studio; ne kopirati cijelu instalaciju WordPressa u Git.

## Redoslijed instalacije

1. Instalirati WordPress Studio sa službene stranice.
2. Stvoriti praznu lokalnu WordPress stranicu.
3. Postaviti hrvatski jezik, Europe/Zagreb i permalink strukturu.
4. Provjeriti pristup naslovnici i `/wp-admin`.
5. Instalirati naš dodatak Web Studio Core iz ovog repozitorija.
6. Aktivirati dodatak i provjeriti registraciju uloge `Web Studio klijent`.
7. Napraviti testne račune: administrator, urednik, autor, suradnik, pretplatnik i klijent.
8. Testirati prijavu, odjavu, zapamti me, reset lozinke i ograničenja uloga.
9. Tek nakon pregleda kompatibilnosti instalirati odabrane dodatke iz manifesta.
10. Izraditi vlastitu blok-temu i demonstracijsku stranicu.
11. Izraditi sigurnosnu kopiju i provjeriti postupak vraćanja.
12. Pripremiti staging/produkcijski plan tek nakon lokalnih testova.

## Kriteriji prihvaćanja

- Lokalna stranica se pokreće i zaustavlja bez greške.
- Administrator može pristupiti `/wp-admin`; klijent ne može.
- Klijent vidi samo portal i vlastiti profil.
- Nijedna javna registracija nije dostupna prije dovršetka potvrde e-maila i zaštite od botova.
- Reset lozinke radi i ne otkriva postoji li račun.
- Neuspjeli pokušaji prijave su ograničeni prije javnog puštanja.
- 2FA je uključena za administratore.
- Sigurnosna kopija može se vratiti u čistu testnu instalaciju.
- Nema tajni, lozinki, tokena ni osobnih podataka u repozitoriju.
- Testirana je kompatibilnost s odabranim verzijama WordPressa i PHP-a.

## Ograničenja

WordPress Studio je razvojno okruženje, ne zamjena za produkcijski hosting, domenu, DNS, e-mail uslugu ili sigurnosni nadzor. WordPress.com račun nije nužan za običnu lokalnu stranicu; neke dodatne značajke poput dijeljenja pregleda i sinkronizacije mogu zahtijevati račun.

## Službeni izvori

- WordPress Studio Docs: https://wordpress.studio/docs/
- Studio Sites: https://wordpress.studio/docs/sites/
- WordPress lokalno razvojno okruženje: https://developer.wordpress.org/block-editor/getting-started/devenv/
- WordPress dodaci: https://wordpress.org/plugins/
