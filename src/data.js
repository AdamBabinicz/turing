import { MdSchool } from "react-icons/md";
import { GiComputing } from "react-icons/gi";

export const links = [
  {
    name: "Start",
    path: "/",
  },
  {
    name: "Turing",
    path: "/turing",
  },
  {
    name: "Fototeka",
    path: "/fototeka",
  },
  {
    name: "Enigma",
    path: "/enigma",
  },
  {
    name: "Rodzina",
    path: "/rodzina",
  },
  {
    name: "Kontakt",
    path: "/kontakt",
  },
];

export const programs = [
  {
    id: 1,
    icon: <MdSchool />,
    title: "Sherborne School",
    info: "1926",
    path: "//www.bbc.com/news/uk-england-dorset-57623441",
  },
  {
    id: 2,
    icon: <MdSchool />,
    title: "King’s College w Cambridge",
    info: "1931 - 1934 (matematyka)",
    path: "//www.kings.cam.ac.uk/archive-centre/online-resources/online-exhibitions/alan-mathison-turing-1912-54",
  },
  {
    id: 3,
    icon: <MdSchool />,
    title: "Doktorat na Princeton University",
    info: "1935 - udowodnił wersję centralnego twierdzenia granicznego",
    path: "//historia.org.pl/2015/03/01/37251/turing",
  },
  {
    id: 4,
    icon: <MdSchool />,
    title: "członek King’s College",
    info: "praca 'O liczbach obliczalnych i ich zastosowania do problemu Entscheidungsproblem'",
    path: "//pl.wikipedia.org/wiki/Dow%C3%B3d_Turinga",
  },
];

export const values = [
  {
    id: 1,
    icon: <GiComputing />,
    title: "Wkład w kryptologię",
    desc: "W 1939 roku Rządowa Szkoła Kodów i Szyfrów zaproponowała Turingowi podjęcie pracy kryptoanalityka w Bletchley Park. Tam też matematyk (na przełomie 1939 i 1940 roku) zaprojektował tzw. bombę Turinga (częściowo w oparciu o prace polskich kryptoanalityków, np. Mariana Rejewskiego), urządzenie służące do łamania kodu Enigmy.",
  },
  {
    id: 2,
    icon: <GiComputing />,
    title: "Wkład w informatykę",
    desc: "Po wojnie zaprojektował jeden z pierwszych elektronicznych, programowanych komputerów. Pracował nad projektem ACE(ang.) (Automatic Computing Engine) w National Physical Laboratory (NPL). 19 lutego 1946 roku przedstawił referat, który był pierwszym szczegółowym projektem programu komputerowego.",
  },
  {
    id: 3,
    icon: <GiComputing />,
    title: "Wkład w biologię matematyczną",
    desc: "Turing od 1952 aż do śmierci w 1954 roku pracował nad zagadnieniami biologii matematycznej, w szczególności nad procesem morfogenezy. W 1952 opublikował pracę pod tytułem The Chemical Basis o Morphogenesis, wysuwając hipotezę odnośnie do tworzenia się wzorców. Jego centrum zainteresowania w tym zakresie było zrozumienie filotaksji Fibonacciego, czyli istnienie liczb Fibonacciego w strukturze ulistnienia roślin.",
  },
  {
    id: 4,
    icon: <GiComputing />,
    title: "Wkład w matematykę",
    desc: "Dzięki pracy 'O liczbach obliczalnych' w wieku 26 lat Turing został uznany za jednego z najwybitniejszych matematyków świata. Bardzo szybko robił karierę naukową, został nawet członkiem King’s College.",
  },
];

export const faqs = [
  {
    id: 1,
    question: "Historia testu",
    answer:
      "Pierwszym programem, który przeszedł test Turinga był robot stworzony przez Josepha Weizenbauma w 1966 roku. Nazywał się ELIZA i jego działanie polegało na wyszukiwaniu pewnych konkretnych kluczowych słów w otrzymywanych wypowiedziach. W 1972 roku powstał robot o nazwie PARRY stworzony przez Kennetha Colby. Jego działanie było podobne do maszyny Josepha Weizenbauma, lecz charakteryzowało się tym, że próbowało imitować zachowanie człowieka ze schizofrenią. Dziś czatboty są wykorzystywane głównie w serwisach konsultingowych i informacyjnych.",
  },
  {
    id: 2,
    question: "Wady testu Turinga",
    answer:
      "Test Turinga jest jednak daleki od idealnego sposobu oceny inteligencji maszyny. Ma sporo znaczących wad, które dowodzą jego zawodności. Test Turinga nie sprawdza tak naprawdę tego czy maszyny są inteligentne i są w stanie myśleć. Jedyne co robi, to sprawdza, czy dana maszyna jest w stanie imitować zachowanie człowieka na bardzo wysokim poziomie. Test ten nie sprawdza bardzo inteligentnych zachowań takich jak rozwiązywanie problemów, czy wymyślanie oryginalnych pomysłów.",
  },
  {
    id: 3,
    question: "Różne wariacje testu Turinga",
    answer:
      "Test Turinga jest dziś bardzo często wykorzystywany, lecz w nieco innych wariacjach względem oryginalnego konceptu. Jedną z nich są testy CAPTCHA znajdujące się na niektórych stronach internetowych. Użytkownik najczęściej ma za zadanie przepisać losowo wygenerowany tekst z obrazka, aby potwierdzić bycie człowiekiem. Wygenerowany obrazek jest zazwyczaj w losowy sposób zniekształcony, aby utrudnić zadanie algorytmom rozpoznającym pismo. Zapobiega to nadużyciom ze strony zautomatyzowanych botów.",
  },
  {
    id: 4,
    question: "Pytanie stare jak... myślenie",
    answer:
      "Postawmy pytanie robocze: czym różni się maszyna od człowieka? Koncepcja była poruszana już wcześniej. Pytanie, czy maszyny potrafią myśleć, jest tak stare, że wpisuje się w nurt dualistyczny i materialistyczny myślenia o świecie. Jego początków można upatrywać jeszcze wcześniej, bo w nadawaniu narzędziom cech ludzkich lub zwierzęcych. Nie cofajmy się jednak tak daleko – zróbmy skok o zaledwie o 400 lat wstecz. René Descartes przewidział istnienie testu… w 1637 roku.",
  },
  {
    id: 5,
    question: "Koncepcja Denis'a Diderot",
    answer:
      "'Jeśli znajdą papugę, która odpowie na wszystko, bez wahania uznam ją za inteligentną istotę'. Cóż, dziś brzmi to wszystko trochę zabawnie. Wiemy już, na jakiej zasadzie rozmawia z nami papuga. Możliwe jednak, że bez prekursorskich pytań nie powstałby współczesny test Turinga.",
  },
  {
    id: 6,
    question:
      "Czy istnieją możliwe do wyobrażenia komputery cyfrowe, które sprawdzą się w tej imitacji gry?",
    answer:
      "Człowiek jest jedyną istotą myślącą, ponieważ tak pragnął Bóg. Dopóki maszyna nie będzie w stanie samodzielnie stworzyć dzieła sztuki, nie możemy mówić o tym, że faktycznie myśli. Maszyna nie naśladuje wystarczająco dobrze ludzkiego systemu nerwowego.",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "",
    quote:
      "Komputer zasłuży na miano inteligentnego, jeżeli spowoduje u człowieka przekonanie, że jest człowiekiem.",
    job: "cytatybaza.pl/autorzy/alan-turing.html",
    avatar: require("./images/1.jpeg"),
  },
  {
    id: 2,
    name: "",
    quote:
      "Pogląd, że maszyny nie mogą sprawiać niespodzianek wynika, jak sądzę, z mitu, na który filozofowie i matematycy są szczególnie narażeni. (...) To założenie jest bardzo przydatne w wielu okolicznościach, ale zbyt łatwo zapomina się, że jest fałszywe. ",
    job: "cytatybaza.pl/autorzy/alan-turing.html",
    avatar: require("./images/1.webp"),
  },
  {
    id: 3,
    name: "",
    quote:
      "Ideą komputerów cyfrowych można wytłumaczyć, mówiąc, że te maszyny są przeznaczone do wykonywania jakichkolwiek czynności, które mogą być wykonywane przez 'komputer ludzki'.",
    job: " cytatybaza.pl/autorzy/alan-turing.html",
    avatar: require("./images/4.webp"),
  },
  {
    id: 4,
    name: "",
    quote:
      "Czy maszyny nie mogą dokonywać czegoś, co powinno być opisane jako myślenie, ale co jest bardzo różne od tego, co robi człowiek?",
    job: "cytatybaza.pl/autorzy/alan-turing.html",
    avatar: require("./images/11.jpg"),
  },
  {
    id: 5,
    name: "",
    quote:
      "Nauka jest równaniem różniczkowym, religia jest warunkiem brzegowym.",
    job: "cytatybaza.pl/autorzy/alan-turing.html",
    avatar: require("./images/5.webp"),
  },
];

export const plans = [
  {
    id: 1,
    name: "“Bomba” kryptologiczna",
    desc: "Rozszerzeniem koncepcji par liter są kaskadowe zastąpienia liter w różnych miejscach ściągi, które dają w wyniku pętle literowe.",
    path: "//fizyka.uniedu.pl/enigma-bomba-kryptologiczna-turinga",
    features: [
      {
        feature: "- elektrycznie wspomagana kopia Enigmy",
        available: true,
      },
      {
        feature:
          "- sprawdzała po kolei wszystkie początkowe ustawienia rotorów",
        available: true,
      },
      {
        feature: "- powstało 6 bomb, tyle ile kolejności rotorów",
        available: true,
      },
      {
        feature: "- bomby wykluczały większość możliwych ustawień",
        available: true,
      },
      {
        feature: "- skutek: odgadnięcie klucza dziennego w ok 2 godziny",
        available: true,
      },
    ],
  },
  {
    id: 2,
    name: "Usprawnienia Enigmy: 1939",
    desc: "W roku 1939 jedyną dostępną techniką tworzenia połączeń elektrycznych w szybko zmieniających pozycje bębnach było zastosowanie małych szczotek z drucików, które stykały się z kontaktami stałymi na Tablicy Testowej.",
    path: "//aw.gov.pl/pl/historia/dekryptaz-szyfru-enigmy/104,Dekryptaz-szyfru-Enigmy.html",
    features: [
      { feature: "- dwa dodatkowe rotory do wyboru", available: true },
      {
        feature: "- rezygnacja z dwukrotnego kodowania klucza komunikatu",
        available: true,
      },
      {
        feature: "- lipiec 1939: Polacy przekazują wiedzę Anglikom",
        available: true,
      },
      {
        feature:
          "- Bletchley Park:  od sierpnia 1939 r. centrum łamania szyfrów",
        available: true,
      },
      { feature: "- osobista protekcja Churchilla", available: true },
      { feature: "- w 1945 r. zatrudniało 9000 ludzi", available: true },
      { feature: "- nigdy nie było zbombardowane", available: true },
    ],
  },
  {
    id: 3,
    name: "Angielskie “bomby”",
    desc: "Alan Turing po otrzymaniu od Polaków dokumentacji i szczegółów działania cyklometru, bomby kryptologicznej, płacht Zygalskiego oraz kopii enigmy, rozpoczął pracę nad własnym urządzeniem do łamania szyfrów.",
    path: "//www.bitblog.pl/pierwszy-brytyjski-komputer.html",
    features: [
      {
        feature: "- symulatory wielu Enigm na raz, projekt Turinga",
        available: true,
      },
      { feature: "- zbudowano ok. 200 maszyn", available: true },
      {
        feature:
          "- wykluczały początkowe ustawienia rotorów na podstawie konfliktów z domniemanymi słowami w tekście jawnym",
        available: true,
      },
      {
        feature: "- w USA powstała wersja dla Enigmy 4-rotorowej",
        available: true,
      },
    ],
  },
];

const Trainer1 = require("./images/15.jpg");
const Trainer2 = require("./images/16.jpg");
const Trainer3 = require("./images/17.jpg");
const Trainer4 = require("./images/18.jpg");
const Trainer5 = require("./images/20.jpg");
const Trainer6 = require("./images/21.jpg");

export const trainers = [
  {
    id: 1,
    image: Trainer1,
    name: "",
    job: "Alan Turing, lat 5",
    socials: [
      "https://www.instagram.com/officialalanturing",
      "https://twitter.com/turinginst/status/1361254497163620355",
      "https://www.facebook.com/AlanTuringCodebreaker",
    ],
  },
  {
    id: 2,
    image: Trainer2,
    name: "",
    job: "Alan i jego brat John z ojcem Juliusem podczas wakacji.",
    socials: [
      "https://www.instagram.com/explore/tags/alanturing",
      "https://twitter.com/turinginst/status/1150714369745063937",
      "https://www.facebook.com/alanturingyear",
    ],
  },
  {
    id: 3,
    image: Trainer3,
    name: "",
    job: "Alan i jego brat John z matką Sarą podczas wakacji nad morzem.",
    socials: [
      "https://www.instagram.com/alan_turing___/",
      "https://mobile.twitter.com/i/events/1540000798075232257",
      "https://www.facebook.com/LogicalAlanTuring",
    ],
  },
  {
    id: 4,
    image: Trainer4,
    name: "",
    job: "Alan ze swoimi szkolnymi przyjaciółmi Robinem i Johnem Wainwrightami, 1926",
    socials: [
      "https://www.instagram.com/i_am_alan_turing",
      "https://twitter.com/turinginst/status/1290636155193524224",
      "https://www.facebook.com/groups/141942430111",
    ],
  },
  {
    id: 5,
    image: Trainer5,
    name: "",
    job: "Turing wiosłował do King's w May Bumps wkrótce po wyborze do drużyny.",
    socials: [
      "https://www.instagram.com/chamorualanturing",
      "https://twitter.com/turinginst/status/1374275168256802819",
      "https://www.facebook.com/groups/Alan.Turing.Appreciation.Society",
    ],
  },
  {
    id: 6,
    image: Trainer6,
    name: "",
    job: "Turing z rodzicami i nieznaną przyjaciółką rodziny stojącymi przed domem rodziców.",
    socials: [
      "https://www.instagram.com/alan.mathison_turing",
      "https://twitter.com/turinginst",
      "https://www.facebook.com/TuringImpact",
    ],
  },
];
