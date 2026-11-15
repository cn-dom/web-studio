# Web Studio

Projekt za izradu vlastitog sustava temeljenog na WordPressu: moderna tema, blokovi, predlošci, provjereni besplatni dodaci i alati za izradu web-stranica.

## Cilj prve faze

1. Pripremiti lokalno WordPress razvojno okruženje.
2. Sastaviti katalog besplatnih i otvorenih komponenti.
3. Provjeriti održavanje, kompatibilnost, sigurnost i licence svakog projekta.
4. Izraditi vlastitu blok-temu i skup prilagođenih blokova.
5. Napraviti jednu modernu demonstracijsku web-stranicu.
6. Testirati uređivanje, mobilni prikaz, pristupačnost, brzinu i sigurnost.
7. Ugraditi provjerenu osnovu za korisničke račune, prijavu, uloge i portal klijenta.

## Načela

- Besplatna uporaba i otvorena licenca imaju prednost.
- Besplatni osnovni paket nije isto što i potpuno besplatan proizvod: bilježimo ograničenja, plaćene nadogradnje i vanjske usluge.
- Ne kopiramo tuđi kod bez provjere licence i obveza atribucije.
- Ne instaliramo više dodataka koji rade istu stvar.
- WordPress jezgra i preuzeti dodaci instaliraju se iz službenih izvora; ovaj repozitorij čuva naš kod, konfiguraciju, dokumentaciju i provjerene integracijske upute.
- WordPressova izvorna autentifikacija ostaje temelj prijave i upravljanja lozinkama.
- Ne tvrdimo da je sustav multi-tenant ili produkcijski siguran dok to ne potvrde testovi izolacije i sigurnosti.
- Svaka promjena mora biti testirana prije objave.

## Struktura

- `docs/` — plan, katalog komponenti, licenciranje, autentifikacija i testiranje
- `theme/` — naša WordPress blok-tema
- `plugins/web-studio-core/` — naš početni dodatak za uloge i portal
- `plugins/` — ostali vlastiti WordPress dodaci
- `patterns/` — predlošci i uzorci blokova
- `scripts/` — razvojne i instalacijske skripte

## Status

Početna faza: inventar i arhitektura korisničkog pristupa su pripremljeni, a početni dodatak je dodan. WordPress instalacija, testiranje dodatka, 2FA, potvrda e-maila i demonstracijska stranica još nisu dovršeni.
