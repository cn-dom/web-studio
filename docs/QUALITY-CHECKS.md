# Kontrola kvalitete i uvjeti za izdanje

## Automatske provjere

GitHub Actions workflow `.github/workflows/quality-checks.yml` pokreće se na promjene u `main`, pull requestove prema `main` i ručno.

Provjerava:
- sintaksu svih PHP datoteka u `plugins/` i `theme/`;
- ispravnost JSON datoteka u repozitoriju.

Ove provjere su osnovna zaštita od očitih grešaka, ne potpuni WordPress testovi.

## Ručni testovi dodatka

Za svaki dodatak testirati:
1. instalaciju i aktivaciju;
2. deaktivaciju i ponovno aktiviranje;
3. prijavu i odjavu;
4. dopuštene i zabranjene radnje za svaku ulogu;
5. izravni pristup URL-ovima bez ovlasti;
6. nonce provjeru i neispravne zahtjeve;
7. validaciju i sanitizaciju unosa;
8. prikaz na mobitelu i tipkovničku navigaciju;
9. ponašanje s uključenim drugim odabranim dodacima;
10. ažuriranje i vraćanje sigurnosne kopije.

## Uvjeti prije produkcije

- [ ] Lokalna WordPress instalacija radi.
- [ ] Sve GitHub Actions provjere prolaze.
- [ ] Dodatak je testiran na podržanim verzijama WordPressa i PHP-a.
- [ ] Sve uloge imaju provjerene granice ovlasti.
- [ ] Administrator ima uključenu 2FA.
- [ ] Reset lozinke i dostava transakcijskih e-mailova rade.
- [ ] Javno kreiranje računa ostaje isključeno dok potvrda e-maila i zaštita od botova nisu testirane.
- [ ] Sigurnosna kopija je vraćena na čistu testnu instalaciju.
- [ ] Nema tajni ili osobnih podataka u repozitoriju.
- [ ] Pristupačnost, mobilni prikaz i performanse su provjereni.
