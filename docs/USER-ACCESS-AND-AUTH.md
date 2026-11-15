# Prijava, korisnički računi i ovlasti

## Cilj i granice

Web Studio koristi WordPressovu provjerenu autentifikaciju kao temelj. Ne pohranjujemo vlastite lozinke i ne izrađujemo zamjenski sustav sesija. Središnji račun Web Studija i upravljanje više zasebnih WordPress instalacija uvode se u kasnijoj fazi, nakon što budu riješeni tenant izolacija, hosting i sigurnosni model.

## Tri odvojena sloja

1. **WordPress administratorski pristup** — postojeći `wp-login.php`, WordPress sesije, oporavak lozinke i uloge.
2. **Portal klijenta na pojedinoj web-stranici** — prilagođena prijavna/računska sučelja preko WordPress API-ja; korisnik vidi samo funkcije koje mu pripadaju.
3. **Središnji Web Studio račun (kasnija faza)** — identitet i upravljanje više web-stranica. Ne smije se smatrati sigurnim multi-tenant sustavom dok izolacija podataka, autorizacija na poslužitelju i testovi nisu provedeni.

## Uloge

| Uloga | Namjena | Granice |
|---|---|---|
| Administrator | Instalacija i potpuna konfiguracija | Samo pouzdani vlasnici/administratori |
| Urednik | Uređivanje i objava sadržaja | Bez upravljanja sustavom i dodacima |
| Autor | Pisanje i objava vlastitih objava | Bez uređivanja tuđeg sadržaja |
| Suradnik | Priprema sadržaja | Objavu odobrava urednik |
| Pretplatnik | Osnovni korisnički račun | Vlastiti profil i dopušteni portal |
| Web Studio klijent | Dodatna prilagođena uloga | Bez administratorskih ovlasti; samo portal i dodijeljene funkcije |

WordPressove ugrađene uloge ne mijenjamo niti im automatski dodjeljujemo administratorske ovlasti. Prilagođena uloga klijenta dobiva samo eksplicitno navedene mogućnosti.

## Funkcije računa

- Prijava korisničkim imenom ili e-mail adresom kroz WordPress autentifikaciju.
- Odjava preko WordPress nonce-protected URL-a.
- Zapamti me preko ugrađenog WordPress obrasca.
- Registracija samo kada administrator izričito uključi javnu registraciju.
- Potvrda/aktivacija e-mailom i sigurno postavljanje lozinke prije javnog puštanja registracije.
- Oporavak lozinke preko WordPressovog službenog toka.
- Uređivanje profila i promjena lozinke.
- Administratorsko upravljanje korisnicima, ulogama i statusom računa.
- 2FA, zaštita od automatiziranih pokušaja prijave i sigurnosni audit preko odabranih, održavanih dodataka nakon provjere kompatibilnosti.

## Sigurnosna pravila

- Ne spremati lozinke, tokene, tajne ni API ključeve u repozitorij.
- Svaka promjena stanja mora provjeriti nonce, ovlasti, validaciju i sanitizaciju.
- Izlaz u HTML mora biti escapiran.
- Ne oslanjati se na skriveni gumb ili skriveni URL kao kontrolu pristupa; provjera ovlasti mora biti na poslužitelju.
- Ne dopustiti korisniku da sam sebi dodijeli ulogu ili capability.
- Ograničiti prijenos datoteka prema vrsti, veličini i ovlastima.
- Koristiti HTTPS u svim javnim okruženjima.
- Redovito ažurirati WordPress, temu i dodatke; imati provjerene sigurnosne kopije i postupak vraćanja.
- Ne prikazivati javno postoji li određena e-mail adresa/korisnički račun.
- Ne uključivati javnu registraciju dok nisu spremni potvrda e-maila, zaštita od botova i pravila privatnosti.

## Dodatak u ovom repozitoriju

`plugins/web-studio-core/` sadrži početni vlastiti dodatak za registraciju prilagođene uloge i jednostavan portal. Dodatak ne zamjenjuje WordPress login, ne uključuje javnu registraciju po zadanim postavkama i ne tvrdi da pruža 2FA ili zaštitu od brute-force napada.

## Kriteriji prihvaćanja prije produkcije

- Testirati sve uloge na zasebnim testnim računima.
- Provjeriti da klijent ne može otvoriti administratorske funkcije ili podatke drugog klijenta.
- Testirati prijavu, odjavu, zapamti me, izgubljenu lozinku i promjenu lozinke.
- Testirati pogrešne nonce vrijednosti, neispravne podatke i neovlaštene zahtjeve.
- Provjeriti e-mail dostavu i SPF/DKIM/DMARC domene.
- Uključiti 2FA za administratore i zaštitu prijave prije javne objave.
- Testirati sigurnosnu kopiju i stvarno vraćanje.
- Provesti testove na podržanim verzijama WordPressa i PHP-a.

**Status:** arhitektura definirana; početni dodatak je razvojni temelj, nije potvrda produkcijske sigurnosti.
