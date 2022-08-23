import React from "react";
import { Link } from "react-router-dom";
import { TbMathSymbols } from "react-icons/tb";
import { FaFacebook, FaPinterest } from "react-icons/fa";
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <article>
          <Link to="/" className="logo">
            <TbMathSymbols />
          </Link>
          <p>
            Po wyroku matematykowi cofnięto dostęp do tajnej dokumentacji, co
            uniemożliwiło jego dalszą pracę przy wielu projektach, którymi się
            zajmował. Zabroniono mu także wjazdu do Stanów Zjednoczonych.
          </p>
          <div className="footer__socials">
            <a
              href="https://www.facebook.com/AlanTuringCodebreaker"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/theturinginst"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram />
            </a>
            <a
              href="https://twitter.com/turinginst?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineTwitter />
            </a>
            <a
              href="https://pl.pinterest.com/natethetatertot/alan-turing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPinterest />
            </a>
          </div>
        </article>
        <article>
          <h4>Linki</h4>
          <Link to="/turing">Turing</Link>
          <Link to="/fototeka">Fototeka</Link>
          <Link to="/enigma">Enigma</Link>
          <Link to="/rodzina">Rodzina</Link>
          <Link to="/kontakt">Kontakt</Link>
        </article>
        <article>
          <h4>Filmy</h4>
          <Link
            to="//www.youtube.com/watch?v=gtRLmL70TH0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Geniusz
          </Link>
          <Link
            to="//www.youtube.com/watch?v=Hkc7YgHgVyU"
            target="_blank"
            rel="noopener noreferrer"
          >
            Myślące komputery
          </Link>
          <Link
            to="//www.youtube.com/watch?v=Luq5uCOM-68"
            target="_blank"
            rel="noopener noreferrer"
          >
            Biografia
          </Link>
          <Link
            to="//www.youtube.com/watch?v=MprdJOaSHYo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wykład
          </Link>
          <Link
            to="//www.youtube.com/watch?v=VnmAdGDiW6s"
            target="_blank"
            rel="noopener noreferrer"
          >
            Alan
          </Link>
        </article>
        <article>
          <h4>Artykuły</h4>
          <Link
            to="//kronikidziejow.pl/porady/alan-turing-zyciorys-wklad-w-informatyke-matematyke-biologie-smierc"
            target="_blank"
            rel="noopener noreferrer"
          >
            Życiorys
          </Link>
          <Link
            to="//pieknoumyslu.com/alan-turing-biografia-czlowieka-ktory-zlamal-kod-enigmy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Piękno umysłu
          </Link>
          <Link
            to="//historiamniejznanaizapomniana.wordpress.com/2015/07/10/alan-turing-ojciec-swiatowej-informatyki"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ojciec informatyki
          </Link>
          <Link
            to="//spidersweb.pl/2021/06/alan-turing-rocznica.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Test Turinga
          </Link>
          <Link
            to="https://mlodytechnik.pl/technika/28545-alan-turing-wyrocznia-wrozy-z-chaosu"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wyrocznia
          </Link>
        </article>
      </div>
      <div className="footer__copyright">
        <small>Radom 2022 - {new Date().getFullYear()}.</small>
      </div>
    </footer>
  );
};

export default Footer;
