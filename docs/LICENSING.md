# Pravila provjere licenci

Prije uključivanja bilo kojeg vanjskog projekta ili materijala u web stranicu klijenta mora se provjeriti što licenca dopušta.

## Što provjeriti
Za svaki vanjski resurs zabilježiti:
- naziv i verziju projekta ili materijala,
- izvorni URL i autora/izdavača,
- točnu licencu i poveznicu na tekst licence,
- smije li se koristiti komercijalno,
- obveze atribucije, očuvanja obavijesti ili objave izmjena,
- posebne uvjete za slike, fontove, ikone, demo sadržaj i dodatne ovisnosti.

## Orijentacijske smjernice
| Licenca | Početna procjena | Obveza |
|---|---|---|
| MIT | U pravilu dopušta komercijalnu uporabu i izmjene | Sačuvati obavijest o autorskim pravima i licencu |
| BSD | U pravilu dopušta komercijalnu uporabu | Poštovati uvjete konkretne BSD varijante |
| Apache-2.0 | U pravilu dopušta komercijalnu uporabu i izmjene | Sačuvati licencu i obavijesti; provjeriti patentne uvjete |
| GPL | Dopušta komercijalnu uporabu uz uvjete licence | Kod distribucije izvedenog djela poštovati odgovarajuće GPL obveze |
| CC BY | Dopušta komercijalnu uporabu | Navesti autora i ispuniti uvjete atribucije |
| CC BY-NC | Nije prikladna za komercijalne projekte | Ne koristiti u komercijalnoj isporuci |
| Bez jasne licence | Ne odobravati za uporabu | Zatražiti dopuštenje ili pronaći alternativu |

Ovo je operativna orijentacija, a ne pravno mišljenje. Uvijek provjeriti stvarni tekst licence i način na koji se materijal koristi.

## WordPress napomena
WordPress ekosustav često koristi GPL licenciranje. Prije redistribucije teme ili dodatka treba provjeriti licencu konkretnog paketa, njegove uključene biblioteke, slike, fontove i demo sadržaj. Ne pretpostavljati da svaki sadržaj na web-stranici projekta ima istu licencu kao njegov izvorni kod.

## Evidencija
Svi odobreni vanjski resursi upisuju se u korijenski THIRD-PARTY-NOTICES.md.

Ako licenca nije jasna, status mora ostati **ČEKA PROVJERU** i resurs se ne uključuje u klijentski projekt.
