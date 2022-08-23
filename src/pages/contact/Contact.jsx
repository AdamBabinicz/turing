import "./contact.css";
import Header from "../../components/Header";
import HeaderImage from "../../images/8.jpg";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

const Contact = () => {
  return (
    <>
      <Header title="Napisz" image={HeaderImage} className="imgx">
        Alan Turing - prześladowany geniusz, bez którego gry wideo mogłyby nigdy
        nie powstać.
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="mailto:puaro@vp.pl">
              <MdEmail />
            </a>
            <a
              href="https://m.me/ernest_arhiever"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsMessenger />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
