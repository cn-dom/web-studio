# PatriaSoul — WordPress tema

Prilagođena WordPress tema za ozbiljan povijesno-domoljubni digitalni časopis PatriaSoul.

## Rubrike

- Domovina
- Hrvatska pamti
- Vjera i obitelj
- Kultura i znanje
- Mediji
- Na današnji dan

Osnovne kategorije automatski se stvaraju pri aktivaciji teme, ako već ne postoje.

## Instalacija i identitet

1. Prenesite mapu `patriasoul-theme` u `wp-content/themes/` i aktivirajte temu.
2. U **Izgled → Prilagodi → Identitet web-mjesta** postavite službeni PatriaSoul logo. Tema podržava WordPress prilagođeni logotip i prikazuje postojeći službeni znak kao početnu rezervnu opciju.
3. U **Izgled → Prilagodi → Zaglavna slika** možete postaviti naslovnu fotografiju.
4. U **Izgled → Izbornici** izradite glavni izbornik i dodijelite ga lokaciji **Glavni izbornik**. Dok to ne učinite, tema prikazuje zadani izbornik.

## Objavljivanje sadržaja

Koristite standardne WordPress objave i kategorije. Dodajte istaknutu sliku svakoj važnoj priči.

U uređivaču objave nalazi se okvir **PatriaSoul — uredničke oznake**:
- Označite **Istaknuta priča na naslovnici** za odabir glavne priče.
- Za rubriku **Na današnji dan** unesite datum u formatu `MM-DD` (npr. `11-18`) i dodijelite objavi kategoriju **Na današnji dan**. Naslovnica prikazuje zapis koji odgovara današnjem datumu.

## Pregled i stvarna WordPress stranica

GitHub Pages prikazuje statički dizajnerski pregled iz korijenskog `index.html`. PHP predlošci, objave, kategorije, uredničke oznake i administracija rade tek nakon instalacije teme u stvarnom WordPressu.

## Tehnologije

WordPress PHP predlošci, CSS, vanilla JavaScript i GSAP/ScrollTrigger za nenametljive animacije. Tema poštuje postavku `prefers-reduced-motion`.
