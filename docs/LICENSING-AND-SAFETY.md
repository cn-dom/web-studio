# Licenciranje, sigurnost i održavanje

## Osnovno pravilo

Ne preuzimamo i ne ugrađujemo kod samo zato što je javno dostupan na GitHubu. Javni repozitorij ne znači automatski da je kod otvorenog koda niti da ga smijemo slobodno redistribuirati.

## Obvezna provjera prije uključivanja

- Postoji li jasna LICENSE datoteka ili službena licenca?
- Dopušta li licenca komercijalnu uporabu, izmjene i redistribuciju?
- Traži li se zadržavanje autorskih prava, obavijesti ili objava izvedenog koda?
- Postoje li zasebne licence za fontove, fotografije, ikone, predloške i druge resurse?
- Je li projekt aktivno održavan i kompatibilan s ciljnom verzijom WordPressa/PHP-a?
- Postoje li poznate ranjivosti ili upozorenja?
- Koristi li dodatak vanjski servis, telemetriju ili prijenos osobnih podataka?
- Postoje li plaćene funkcije, kvote ili obvezni računi?

## Način distribucije

- WordPress Core i tuđe dodatke u pravilu instalirati iz službenih izvora.
- U ovaj repozitorij uključivati naš kod, konfiguraciju, popis ovisnosti, skripte i dokumentaciju.
- Tuđi izvorni kod uključiti samo kada je to potrebno i kada licenca to dopušta; uz njega zadržati licencu i autorske obavijesti.
- Ne spremati API ključeve, lozinke, privatne podatke ni produkcijske sigurnosne kopije u Git.
- Za svaku vanjsku komponentu zabilježiti točnu verziju i izvor.

## Sigurnosno testiranje

Sve dodatke prvo instalirati na lokalnoj testnoj stranici. Provjeriti prijavu, korisničke uloge, obrasce, prijenos datoteka, ažuriranja, kompatibilnost i ponašanje nakon deaktivacije dodatka.

Ovaj dokument je politika projekta, a ne pravno mišljenje. Za distribuciju komercijalnog proizvoda potrebno je zasebno provjeriti pravne obveze svake komponente.
