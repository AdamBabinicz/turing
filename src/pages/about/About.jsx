import Header from "../../components/Header";
import "./about.css";
import HeaderImage from "../../images/6.webp";
import StoryImage from "../../images/6.png";
import VisionImage from "../../images/8.png";
import MissionImage from "../../images/12.jpg";
const About = () => {
  return (
    <>
      <Header title="Turing" image={HeaderImage}>
        <p>
          Alan Turing jest uważany za jednego z najważniejszych pionierów w
          swojej dziedzinie. Odegrał on kluczową rolę w złamaniu słynnego kodu
          Enigmy, tajnego systemu komunikacji używanego przez nazistów podczas
          II wojny światowej. Uważa się, że dzięki pracy Turinga wojna została
          skrócona o około dwa lata. Odpowiadało to uratowaniu około 14 milionów
          istnień ludzkich.
        </p>
        <br />
        <p>
          <em>
            pieknoumyslu.com/alan-turing-biografia-czlowieka-ktory-zlamal-kod-enigmy
          </em>
        </p>
      </Header>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="..." />
          </div>
          <div className="about__section-content">
            <h2>Człowiek, który złamał kod Enigmy</h2>
            <p>
              W 1939 roku, dzień po wybuchu II wojny światowej, Turing zapisał
              się do Rządowego Kodeksu i Szkoły Szyfrów. Po bardzo ciężkiej
              pracy Turingowi udało się rozszyfrować nazistowskie komunikaty.
              Stało się to dzięki maszynie elektromagnetycznej zwanej bombą.
              Udało mu się przechwycić niektóre niemieckie dokumenty, w których
              zapisano kody, którymi posługiwali się naziści w lutym 1941 roku.
              Dzięki tym danym i bombie był w stanie zinterpretować wiele
              tajnych wiadomości armii niemieckiej.
            </p>
            <p>
              Był to oczywiście tajny program i Turing nigdy o nim nie mówił.
              Jego wkład stał się nam znany dopiero po jego śmierci. Nawet jego
              przyjaciele i rodzina nie wiedzieli o jego ogromnym wkładzie w
              ludzkość, ponieważ była to tajemnica państwowa.
            </p>
            <p>
              Zbadał też świat sztucznej inteligencji i wynalazł tak zwany test
              Turinga. To gra symulacyjna, która określa, czy maszyna potrafi
              myśleć. Obecne narzędzie CAPTCHA jest jednym z zastosowań testu
              Turinga.
            </p>
            <p>
              <em>
                pieknoumyslu.com/alan-turing-biografia-czlowieka-ktory-zlamal-kod-enigmy
              </em>
            </p>
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h2>Wyjątkowe dziecko</h2>
            <p>
              Od najmłodszych lat Alan wykazywał wyjątkową inteligencję, co
              potwierdziło się, gdy nauczył się samodzielnie czytać w zaledwie
              trzy tygodnie. Kochał też wszystko, co było związane z liczbami i
              był fanem łamigłówek. W wieku zaledwie ośmiu lat założył
              laboratorium chemiczne w swoim domu i zaczął eksperymentować.
            </p>
            <p>
              Alan Turing był homoseksualistą w czasie, gdy w Anglii nadal
              obowiązywało wiktoriańskie prawo, które czyniło homoseksualizm
              przestępstwem.
            </p>
            <p>
              W 1954 Turing zmarł w domu z powodu zatrucia cyjankiem po
              ugryzieniu jabłka zawierającego tę substancję. Oficjalne dokumenty
              twierdziły, że popełnił samobójstwo, ale wciąż istnieją
              wątpliwości co do jego dziwnej śmierci. Matka Turinga powiedziała,
              że to był wypadek, ale wielu innych spekulowało, że było to
              zabójstwo.
            </p>
            <p>
              <em>
                pieknoumyslu.com/alan-turing-biografia-czlowieka-ktory-zlamal-kod-enigmy
              </em>
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="..." />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="..." />
          </div>
          <div className="about__section-content">
            <h2>Ojciec informatyki</h2>
            <p>
              Mówi się, że symbol firmy Apple, nadgryzione jabłko, które przez
              długi czas nosiło barwy homoseksualnej flagi, było hołdem dla
              Alana Turinga. Niemniej jednak Steve Jobs zawsze temu zaprzeczał.
              W 2013 roku królowa Elżbieta II ułaskawiła Turinga i na jego cześć
              wzniesiono kilka pomników.
            </p>
            <p>
              29 sierpnia 2014 roku miała miejsce premiera filmu ” Gra tajemnic”
              (ang. The Imitation Game) w reżyserii Mortena Tylduma, który
              opowiada o historii życia Alana Turinga. W rolę głównej postaci
              wcielił się brytyjski aktor Benedict Cumberbatch. W 2015 roku film
              dostał Oscara za najlepszy scenariusz.
            </p>
            <p>
              <em>historiamniejznanaizapomniana</em>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
