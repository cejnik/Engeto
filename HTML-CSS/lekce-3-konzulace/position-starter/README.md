# 1. Úkol: Vytvoření animace pomocí relativního pozicování v CSS

Relativní pozicování umožňuje posunout prvek relativně k jeho původní pozici. Tento přístup může být využit k vytvoření plynulých animací při interakci s uživateli.

Vaším úkolem je přidat relativní pozicování k obrázkům v rámci třídy .image-item a vytvořit animaci pro stav hover.

## Postup:

1. V souboru `styles.css` najděte třídu `.image-item img`.
2. Této třídě nastavte `position: relative;` aby jsme umožnili relativní pozicování pro obrázky.
3. Přidejte nový blok pro stav hover obrázků: `.image-item img:hover {}`.
4. V rámci bloku `:hover` přidejte vlastnost `top` a nastavte hodnotu na `-12px`.

Tímto krokem vytvoříte animaci posunu obrázku nahoru o 12 pixelů při najetí myši.

Po dokončení těchto kroků byste měli mít funkční animaci, která se spustí při najetí myši na obrázek.

# 2. Úkol: Nastavení absolutní pozice pro tlačítko zavřít v modálním okně

V této úloze se zaměříme na správné pozicování prvků uvnitř modálního okna pomocí relativního a absolutního pozicování v CSS.

Prvním krokem je vytvořit relativní kontext pro prvky uvnitř modálního okna. Toho dosáhneme nastavením relativní pozice pro samotné modální okno.

Poté, co máme relativní kontext, můžeme použít absolutní pozicování pro umístění tlačítka zavřít na konkrétní místo uvnitř modálního okna. Absolutní pozicování nám umožňuje umístit prvek na specifické místo na stránce bez ohledu na jeho původní umístění.

## Postup:

1. V souboru `styles.css` najděte třídu `.modal-content`.
2. Této třídě nastavte `position: relative;` aby jsme umožnili relativní pozicování pro obsah modálního okna.
3. Nyní najděte sekci pro třídu `.close-button`.
4. Teto tříde nastavte vlastnosti `position: absolute;`, `top: 8px;` a `right: 16px;`. Tímto krokem povolíte absolutní pozicování pro tlačítko zavřít a nastavíte jeho umístění vpravo nahoře uvnitř modálního okna.

Po provedení těchto kroků by mělo tlačítko zavřít být umístěno vpravo nahoře uvnitř modálního okna.

# 3. Úkol: Nastavení absolutní pozice pro obrázek profilu v rámci profilového boxu

V této úloze se zaměříme na správné pozicování obrázku profilu uvnitř profilového boxu pomocí relativního a absolutního pozicování v CSS.

Při umisťování prvků v rámci komplexních rozložení je důležité chápat, jak relativní a absolutní pozicování spolu souvisí a jak je používat v kombinaci.

Nejprve budeme potřebovat relativní kontext pro prvek profile-cart. Toho dosáhneme nastavením relativní pozice pro tento prvek.

Poté, co máme vytvořen relativní kontext, můžeme použít absolutní pozicování pro umístění obrázku profilu (profile-picture) uvnitř profile-cart. Tímto způsobem můžeme přesně určit umístění obrázku vůči jeho rodičovskému prvku.

## Postup:

1. V souboru `styles.css` najděte třídu `.profile-cart`.
2. Této třídě nastavte `position: relative;` aby jsme umožnili relativní pozicování pro obsah profilu.
3. Nyní najděte sekci pro třídu `.profile-picture`.
4. Teto tříde nastavte vlastnosti `position: absolute;`, `top: -20px;` a `right: -10px;`. Tímto krokem povolíte absolutní pozicování pro obrázek profilu a nastavíte jeho umístění uvnitř profilového boxu.

Po provedení těchto kroků by měl být obrázek profilu správně umístěn vpravo nahoře uvnitř profilového boxu.

# 4. Úkol: Nastavení absolutní pozice pro počet položek v nákupním košíku

V této úloze se zaměříme na umístění počtu položek v nákupním košíku pomocí absolutního pozicování ve vztahu k ikoně nákupního košíku, která bude používat relativní pozicování v CSS.

Použití relativního a absolutního pozicování nám umožní přesně určit umístění počtu položek v nákupním košíku vzhledem k ikoně nákupního košíku. Tímto způsobem můžeme vytvořit efektivní a flexibilní způsob zobrazení počtu položek v nákupním košíku.

## Postup:

1. V souboru `styles.css` najděte třídu `.fa-shopping-cart`.
2. Této třídě nastavte `position: relative;` aby jsme umožnili relativní pozicování pro ikonu.
3. Nyní najděte sekci pro třídu `.shopping-cart-badge`.
4. Teto tříde nastavte vlastnosti `position: absolute;`, `top: -12px;` a `right: -12px;`. Tímto krokem povolíte absolutní pozicování pro počet položek v nákupním košíku a nastavíte jeho umístění vzhledem k ikoně nákupního košíku.

Po provedení těchto kroků by měl počet položek v nákupním košíku být správně umístěna vedle ikony nákupního košíku.

# 5. Úkol: Nastavení absolutní pozice pro počet správ v komentářích

V této úloze se zaměříme na umístění počtu správ v komentářích pomocí absolutního pozicování ve vztahu k ikoně správy, která bude používat relativní pozicování v CSS.

Použití relativního a absolutního pozicování nám umožní přesně určit umístění počtu správ v komentářích vzhledem k ikoně správy.

## Postup:

1. V souboru `styles.css` najděte třídu `.fa-comment-alt`.
2. Této třídě nastavte `position: relative;` aby jsme umožnili relativní pozicování pro ikonu.
3. Nyní najděte sekci pro třídu `.comment-badge`.
4. Teto tříde nastavte vlastnosti `position: absolute;`, `top: -16px;` a `right: -16px;`. Tímto krokem povolíte absolutní pozicování pro počet správ v komentářích a nastavíte jeho umístění vzhledem k ikoně správy.

Po provedení těchto kroků by měl počet správ v komentářích být správně umístěna vedle ikony správy.

# 6. Úkol: Vytvoření tooltipu

V této úloze se zaměříme na vytvoření tooltipu pro zvýraznění vysvětlujícího textu na webové stránce.

## Postup:

1. V souboru `styles.css` najděte třídu `.tooltip`.
2. Této třídě nastavte `position: relative;` aby jsme umožnili relativní pozicování pro text.
3. Nyní najděte sekci pro třídu `.tooltip-text`.
4. Teto tříde nastavte vlastnosti `position: absolute;`, `bottom: 20px;` a `left: 50%;`. Tímto krokem povolíte absolutní pozicování pro tooltip a nastavíte jeho umístění vzhledem k textu.
5. Té same tříde nastavte `visibility: hidden;`. Tímto krokem skryjeme tooltip a zobrazi se až po najetí myši na odkaz, který obsahuje vysvětlující text.

# 7. Úkol: Umístění ikony v pravém dolním rohu s použitím pozice fixed

V této úloze se zaměříme na umístění ikony v pravém dolním rohu stránky pomocí vlastnosti position: fixed; v CSS. Tato ikona bude sloužit k plynulému posunu stránky zpět nahoru a bude vždy viditelná, i když uživatelé posouvají obsah stránky dolů.

## Postup:

1. V souboru `styles.css` najděte třídu `.scroll-to-top`.
2. Přidejte vlastnosti `position: fixed;`, `bottom: 20px;` a `right: 20px;`. Tímto krokem nastavíte ikonu na fixní pozici v pravém dolním rohu stránky, přičemž bude napozicovaná o 20 pixelů od spodního a pravého okraje okna prohlížeče.

Po provedení těchto kroků by měla být ikona správně umístěna v pravém dolním rohu stránky a měla by být vždy viditelná, i když uživatelé posouvají obsah stránky.

# 8. Úkol: Umístění ikony v pravém dolním rohu s použitím pozice fixed

V této úloze se zaměříme na umístění ikony v pravém dolním rohu stránky pomocí vlastnosti position: fixed; v CSS. Tato ikona bude sloužit k plynulému posunu stránky zpět nahoru a bude vždy viditelná, i když uživatelé posouvají obsah stránky dolů.

## Postup:

1. V souboru `styles.css` najděte třídu `.heart`.
2. Přidejte vlastnosti `position: fixed;`, `bottom: 80px;` a `right: 20px;`. Tímto krokem nastavíte ikonu na fixní pozici v pravém dolním rohu stránky, přičemž bude napozicovaná o 20 pixelů od spodního a pravého okraje okna prohlížeče.

Po provedení těchto kroků by měla být ikona správně umístěna v pravém dolním rohu stránky a měla by být vždy viditelná, i když uživatelé posouvají obsah stránky.

# 9. Úkol: Umístění ikony v pravém dolním rohu s použitím pozice fixed

V této úloze se zaměříme na umístění ikony v pravém dolním rohu stránky pomocí vlastnosti position: fixed; v CSS. Tato ikona bude sloužit k plynulému posunu stránky zpět nahoru a bude vždy viditelná, i když uživatelé posouvají obsah stránky dolů.

## Postup:

1. V souboru `styles.css` najděte třídu `.message`.
2. Přidejte vlastnosti `position: fixed;`, `bottom: 140px;` a `right: 20px;`. Tímto krokem nastavíte ikonu na fixní pozici v pravém dolním rohu stránky, přičemž bude napozicovaná o 20 pixelů od spodního a pravého okraje okna prohlížeče.

Po provedení těchto kroků by měla být ikona správně umístěna v pravém dolním rohu stránky a měla by být vždy viditelná, i když uživatelé posouvají obsah stránky.

# 10. Úkol: Fixní umístění navigace na horní část stránky

V této úloze se zaměříme na fixní umístění navigačního menu na horní část stránky pomocí vlastnosti position: fixed; v CSS. Tímto způsobem zůstane navigace viditelná na obrazovce i při posouvání obsahu stránky.

## Postup:

1. V souboru `styles.css` najděte třídu `.navigation`.
2. Přidejte vlastnosti `position: fixed;` a `top: 0;`. Tímto krokem nastavíte navigaci na fixní pozici na horní části stránky a zajistíte, že bude zobrazena nad ostatním obsahem.
3. Přidejte vlastnost `width: 100%;`. Tímto krokem nastavíte navigaci na 100 % šířky okna prohlížeče.
4. Přidejte vlastnost `z-index: 1`. Tímto krokem zajistíte, že navigace bude zobrazena nad ostatním obsahem stránky.

Po provedení těchto kroků by měla být navigace správně umístěna na horní části stránky a zůstane viditelná i při posouvání obsahu.

# 11. Úkol: Vytvoření modálního okna

V této úloze se zaměříme na vytvoření modálního okna. Modální okno je užitečný prvek pro zobrazení obsahu na vrcholu stávající stránky, který vyžaduje interakci uživatele k zavření.

## Postup:

1. V souboru `styles.css` najděte třídu `.modal`.
2. Přidejte vlastnosti `position: fixed;`, `top: 0;` a `left: 0;`.
   Tímto krokem nastavíte modální okno na fixní pozici na horní části stránky a zajistíte, že bude zobrazeno nad ostatním obsahem. `position: fixed`; zajistí, že se modální okno nebudě posouvat spolu s posouváním obsahu stránky, zatímco `top: 0;` a `left: 0;` umístí okno na horní okraj stránky.
3. Přidejte vlastnost `width: 100%;` a `height: 100%;`.
   Tímto krokem nastavíte šířku a výšku modálního okna na 100 % šířky a výšky okna prohlížeče. To zajistí, že modální okno bude pokrývat celou šířku a výšku stránky.
4. Přidejte vlastnost `z-index: 1`.
   Tímto krokem zajistíte, že modální okno bude zobrazeno nad ostatním obsahem stránky. `z-index: 1` určuje vrstvu, na které bude prvek zobrazen, a hodnota 1 zajišťuje, že bude nad ostatními prvky.
5. Odkomentujte řádek s vlastností `display: none;`. Tímto krokem zajistíte, že modální okno bude na začátku skryto.

# 12. Úkol: Zobrazení detailu profilu

1. V souboru styles.css najděte třídu `.profile-hidden`.
2. Odkomentujte řádek s vlastností `display: none;`.
   Tímto krokem umožníte skrytí skryté části uživatelského profilu. `display: none;` zajistí, že skrytá část nebude viditelná na stránce.
3. Odkomentujte řádek s vlastností `display: block;` na tříde `.profile-view:hover .profile-hidden`.
   Tímto krokem umožníte zobrazení skryté části uživatelského profilu po najetí myši na tlačítko pro zobrazení profilu. `display: block;` zajistí, že skrytá část bude viditelná na stránce.
