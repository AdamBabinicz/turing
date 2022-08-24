import React, { useState } from "react";
import { Link } from "react-router-dom";
import Image from "../images/3.png";
import Modal from "../components/Portal/Modal";

const MainHeader = () => {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>
            geniusz, który ocalił matematykę przed katastrofą, świat przed
            Hitlerem, a ludziom dał komputer
          </h4>
          <h1>Alan Mathison Turing</h1>
          <p>
            Brytyjski matematyk, kryptolog, twórca koncepcji maszyny Turinga i
            jeden z twórców informatyki. Uważany za ojca sztucznej inteligencji.
          </p>
          <button onClick={() => Toggle()} className="btn lg">
            Więcej
          </button>
          <Modal show={modal} close={Toggle} title="Wczesny start">
            <p>
              23 czerwca 1912 w Londynie urodził się Alan Mathison Turing.
              Turing miał starszego brata, Johna. Ojciec niedługo po jego
              narodzinach wrócił do Indii, natomiast matka wyjechała tam
              piętnaście miesięcy później – w połowie września 1913,
              pozostawiając Alana pod opieką nianiek. Rodzice zapisali go do
              szkoły St Michael, gdy miał 6 lat.
            </p>
            <br />
            <p>
              <em>pl.wikipedia.org/wiki/Alan_Turing</em>
            </p>
          </Modal>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="..." />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
