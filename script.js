const questions = [
    "Hány helyen (lakásban) lakott eddig Ancsi? Aki a legmesszebbi választ adja, iszik. De, hogy ne egyedül igyon, aki a legközelebbi számot mondja, kiválaszthat mellé egy ivócimborát.",
"Hányszor költözött eddig Ancsi? Aki a legmesszebbi választ adja, iszik. De, hogy ne egyedül igyon, aki a legközelebbi számot mondja, kiválaszthat mellé egy ivócimborát.",
"Melyik külföldi országban élt már Ancsi és mennyi ideig lakott ott? Aki leghamarabb kitalálja mindkettőt, kioszthat kortyokat. Ha csak az egyiket vagy egyiket sem találjátok ki, Ancsi iszik.",
"Mi Ancsi kedvenc gyümölcs vibe-ra és mi ízre? Aki elsőként eltalálja, itat.",
"Mi volt Ancsi kedvenc tantárgya az iskolában? Aki elsőként eltalálja, itat.",
"Melyik szubkulturával beefel Ancsi? Aki elsőként eltalálja, itat.",
"vedd az élerkorát, addj hozzá...",
"Mit vesz ki Ancsi mindig a hamburgerből? Aki elsőként eltalálja, itat.",
"Melyik ételről volt híres Ancsi Békéscsabán? Aki elsőként eltalálja, itat.",
"Melyik dalt kell Ancsival énekelnie bárkinek, aki körülötte van, amikor Ancsi részegen nem tud pisilni? Aki elsőként eltalálja, itat.",
"Mi Ancsi fedőneve, amikor illegális dolgokat csinál? Aki elsőként eltalálja, itat.",
"Hogy hívják Ancsi öccsét? Aki elsőként eltalálja, itat.",
"Ki volt a #1 előadó Ancsi legutóbbi spotify wrapped-jében? Aki elsőként eltalálja, itat.",
"Mi Ancsi kedvenc színe? Aki elsőként eltalálja, itat.",
"Ki Ancsi celebrity crush-ja? Aki elsőként eltalálja, itat.",
"Milyen rendellenességgel született Ancsi? Aki elsőként eltalálja, itat.",
"Mi volt Ancsi első szava? (az anyaapamamatatán kívül)",
"Körbemegyünk, mindenki mondjon egy nevet Ancsi exei közül. Aki nem tud mondani vagy ismétel, iszik.",
"Melyik az az állat amitől Ancsi kibaszott sokáig rettegett? Aki elsőként eltalálja, itat.",
"Mi Ancsi kedvenc állata? Aki elsőként eltalálja, itat.",
"Hány dioptriás a szemüveget hord Ancsi? Aki a legmesszebbi választ adja, iszik. De, hogy ne egyedül igyon, aki a legközelebbi számot mondja, kiválaszthat egy ivócimborát.",
"Körbe megyünk, mindenki mondjon valamit, amit Ancsi utál. Aki nem tud mondani vagy ismétel, iszik.",
"Ha most Ancsi egy lakatlan szigetre mehetne 3 emberrel innen, kit vinne? Aki nem kerül be a legtöbb tippbe, iszik.",
"Mindenki mondjon egy dolgot, amit szerintük Ancsi biztosan megtenne részegen. A legkevésbé valószínű választ adó iszik.",
"Ancsi becsukja a szemét. Mindenki megérinti egyesével és Ancsinak ki kell találnia, ki volt az. Minden eltévesztett ember iszik.",
"Ki tudja a legjobban utánozni Ancsi nevetését? Ancsi dönt, a kiválasztott iszik.",
"Mindenki mondjon egy dolgot, amiben szerintük Ancsi verhetetlen. Ha Ancsi szerint túlzás, az illető iszik.",
"Mindenki tippelje meg, mi lenne Ancsi első mondata egy reality show-ban. Ancsi kiválasztja a kedvencét, a többiek isznak.",
"Kinek írt innen Ancsi utoljára? Az illető iszik.",
"Kopp, kopp..",
    "Ha valaki tud mondani Ancsiról egy sztorit, amire Ancsi már nem emlékszik, Ancsi iszik.",
"Mindenki mondja ki egyszerre, hogy mi jut Ancsiról először eszébe. Ha legalább hárman ugyanazt mondják, Ancsi iszik.",
"Mindenki döntse el, melyik emberre hasonlít Ancsi legjobban a társaságból. Egyszerre mutassatok rá. Akire a legtöbb ember mutat, az iszik Ancsival.",
"Aki már ivott Ancsival hajnal 3 után, iszik.",
"Tippeljétek meg, ki lesz ma a legrészegebb, akire a legtöbben mutatnak, annak hajrá, igyá!!",
"Mindenki mutasson arra, aki szerintük a leghangosabban nevet. A legtöbb szavazatot kapó iszik.",
"Igyon az, aki most fáradt.",
"Sorban megyünk, mindenki kiválaszt valakit, akit alig ismer, mond róla egy kamu tényt és ha igaznak bizonyul, a kiválasztott iszik, ha nem, fordítva.",
"Mi az a dolog, ami annyira Ancsis, hogy mindenki tudja róla?",
"Aki szerint Ancsi 2 óra múlva már hangosabb lesz, mint most, az iszik.",
"Aki úgy gondolja, nem ismeri eléggé Ancsit, kérdezzen tőle valamit. Ha Ancsi nem válaszol, Ancsi iszik, ha igen, akkor fordítva.",
"Mindenki mondja el, szerinte mi Ancsi legnagyobb red flag-je, aztán szavazzátok meg a legrílebbet és basszátok meg magatokat. (nem, amúgy kioszthat kortyokat a tag, na)",
"Mindenki mondjon egy, Ancsival közös emléket, lehet olyat is, ami nem történt meg. Majd mindenki szavazzon, hogy szerinte kamu-e vagy sem. A vesztesek isznak.",
"Mindenki mondjon egy tárgyat, ami eszébe jut Ancsiról, Ancsi kiválasztja a kedvencét és ő itathat.",
"Mondj 3 dolgot amit Ancsi biztosan mond egy buliban.",
"Mindenki mondja hol találkozott Ancsival először. Ha elbaszod iszol, ha nem, Ancsi iszik.",
"Aki volt már Ancsival koncerten, iszik.",
"Aki legrégebbóta ismeri Ancsit, iszik.",
"Mindenki iszik!!!!!",
"A szülinapos kiválaszthatja, ki iszik.",
"Aki késett, iszik.",
"Aki a legkorábban érkezett, iszik.",
"Aki a legkésőbb érkezett, iszik.",
"Hímlények isznak!!!!",
"Buzinők isznak!!!!",
"Mindenki utánozza Ancsit egyszerre. Ancsi eldönti, ki volt a legjobb és ő iszik.",
"Mindenki játsszon el egy tipic Ancsi momentet, majd szavazzátok meg a legjobbat. Ő itathat.",
"Játsszátok el, hogyan reagálna Ancsi arra, ha nyerne 100 millió magyar forintot. A legjobb alakítás itathat.",
"Játsszátok el, hogy Ancsi próbál meggyőzni valakit valamiről.",
"Mindenki 20 másodpercig reklámozza magát, mint barát. Ancsi kiválasztja a győztest és ő iszik.",
"Aki a legkínosabb sztorit meséli Ancsiról, itat.",
"Körbemegyünk, mindenki mondjon egy dolgot, amit Ancsi mindig magánál tart. Ha épp nincs nála, mindenki iszik.",
"Mi Ancsi legidegesítőbb szokása? Mindenki válaszol, ha a többség nem ért veled egyet iszol, ha igen, Ancsi iszik.",
"Mindenki mondjon egy Ancsis filmet, ha Ancsi nem ért vele egyet, iszol.",
"Mindenki mondjon egy dalszövegrészletet, ami \"Ancsiról szól\". Közösen szavazzátok meg legjobbat, ő itat.",
"Aki volt már Ancsi szülinapján, iszik.",
"Hogyan nevezték volna el a szülei Ancsit, ha fiúnak születik? Aki téved, iszik.",
"Mi Ancsi harmadik neve?",
"Melyik vitatigris a legfinomabb?",
"Előbb a tej vagy a gabonapehely? Aki nem jól tudja, iszik. (Ancsié az abszolút igazság, slussz-passz!!!)",
"Aki ma készített közös képet Ancsival, iszik.",
"Aki ma még nem ölelte meg Ancsit, most ölelje meg, aztán igyon!",
"Aki mondta már ma, hogy \"Boldog szülinapot!\", iszik!",
"Aki busszal jött, iszik.",
"Ancsi kiválasztja a legviccesebb embert a társaságból, ő itat.",
"Mindenki mondjon egy viccet, majd válasszátok ki a legviccesebbet, ő iszik. Ha Ancsi is ugyanarra az emberre szavazott, mint a többség, duplán iszik.",
"Ancsi kiválaszt két embert, akik kő-papír-olló-val döntik el, melyikük iszik.",
"Mi Ancsi álommunkája? Aki elsőként eltalálja, itat.",
"Ki lenne Ancsi legjobb lakótársa (Kistejen kívül)? A legtöbb szavazatot kapó itat.",
"Mindenki mondjon magáról két igazságot és egy hazugságot. Aki nem találja ki, melyik volt kamu, iszik.",
"Ki tud több olyan zenét mondani, amit Ancsi biztosan nem kapcsolna el? Aki a legtöbbet mondja, itathat.",
"Aki eltalálja, mit enne Ancsi ebben a pillanatban legszívesebben, az itat.",
"Mindenki találjon ki két új becenevet Ancsinak, majd szavazzátok meg a legjobbat és a legrosszabbat. Aki a legjobbat mondja, itathat, a legrosszabb miatt meg Ancsi iszik.",
"Aki megbánta, hogy ivott ma, itasson meg valaki mást!!",
"Mindenki mondja el, mi volt a legcikibb korszaka.",
"Mindenki emelje fel a poharát, aki utoljára teszi le, az iszik.",
"Aki elsőként elneveti magát, iszik.",
"Aki a legközelebb ül a mosdóhoz, iszik.",
"Aki a legtöbbet beszélt eddig, iszik.",
"Háromra nézzen mindenki valakire, akire a legkevesebben néznek, iszik.",
"A következő ember, aki kimondja, hogy \"amúgy\", az iszik.",
"Mindenki csukja be a szemét és mutasson rá valakire, akire a legtöbben mutatnak, iszik.",
"Aki utoljára ér hozzá a poharához, iszik.",
"Aki először megszólal, iszik.",
"A következő ember, aki kimondja, hogy \"baszdmeg\", iszik."
];

let current = 0;

const card = document.getElementById("card");
const ques = document.getElementById("ques");

const tmp = document.getElementById("tmp");
const questmp = document.getElementById("questmp");

ques.textContent = questions[current];
questmp.textContent = questions[current+1];

card.addEventListener("click", () => {

    // move card away
    card.classList.add("exit");

    // wait for animation
    card.addEventListener("transitionend", () => {

        // go to next question
        current++;

        if (current >= questions.length) {
            current = 0;
        }

        // change text
        ques.textContent = questions[current];

        // bring card back
        card.classList.add("no-transition")
        card.classList.remove("exit");
        card.offsetHeight;
        card.classList.remove("no-transition");
        questmp.textContent = questions[current+1];
    }, { once: true });
});

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js");
}
