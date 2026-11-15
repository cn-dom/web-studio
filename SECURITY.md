# Sigurnosna politika

## Podržane verzije

Sigurnosne ispravke primjenjujemo na aktivnu razvojnu verziju na grani `main`. Prije produkcijskog izdanja definirat ćemo podržane izdanja i raspored sigurnosnog održavanja.

## Prijava ranjivosti

Nemojte javno objavljivati neispravljene ranjivosti, pristupne podatke, osobne podatke ili aktivne tokene.

Ako je za repozitorij omogućena GitHubova značajka **Private vulnerability reporting**, koristite karticu Security → Advisories → Report a vulnerability. Ako ta mogućnost nije dostupna, otvorite privatni kanal s vlasnikom repozitorija prije javne objave detalja.

U prijavi navedite:
- zahvaćenu datoteku i verziju;
- korake za reprodukciju;
- očekivani i stvarni rezultat;
- mogući utjecaj;
- siguran dokaz koncepta bez pristupa tuđim podacima.

## Sigurnosna pravila razvoja

- Nikada ne pohranjujemo lozinke, API ključeve, tokene ili produkcijske konfiguracije u Git.
- Sve privilegirane radnje moraju provjeriti ovlasti na poslužitelju.
- Za zahtjeve koji mijenjaju stanje koristimo nonce, validaciju i sanitizaciju.
- HTML izlaz mora biti pravilno escapiran.
- Korisnički unos i datoteke tretiramo kao nepouzdane.
- Koristimo najmanje potrebne WordPress ovlasti.
- Ovisnosti i dodaci trećih strana provjeravaju se prije instalacije i redovito ažuriraju.
- Sigurnosne kopije moraju biti zaštićene i postupak vraćanja testiran.

## Ograničenje

GitHub Actions provjere sintakse i JSON-a ne dokazuju da je WordPress dodatak siguran. Prije produkcije potrebni su funkcionalni testovi u WordPressu, testovi ovlasti, provjere ranjivosti i test vraćanja sigurnosne kopije.
