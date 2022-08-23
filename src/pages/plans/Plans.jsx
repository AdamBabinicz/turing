import "./plans.css";
import Header from "../../components/Header";
import HeaderImage from "../../images/2.jfif";
import Card from "../../UI/Card";
import { plans } from "../../data";
import { GrVirtualMachine } from "react-icons/gr";
import { Link } from "react-router-dom";

const Plans = () => {
  return (
    <>
      <Header title="Enigma" image={HeaderImage}>
        Urządzenie trafiło do małej wioski Bletchley w hrabstwie Buckingham,
        około 70 km od Londynu, w połowie drogi między Oxfordem a Cambridge;
        było to dodatkowym walorem tego miejsca, gdyż najlepsi uczeni brytyjscy
        mieli tam łatwy dojazd. W wiosce tej stała ogromna wiejska rezydencja,
        którą rząd brytyjski po prostu zarekwirował i umieścił w niej
        Governement Code and Cipher School; oczywiście, nazwa ta był czystą
        lipą, a rzekoma szkoła była w rzeczywistości supertajną placówka SIS.
      </Header>
      <section className="plans">
        <div className="container plans__container">
          {plans.map(({ id, name, desc, path, features }) => {
            return (
              <Card key={id} className="plan">
                <h3>{name}</h3>
                <small>{desc}</small>
                <GrVirtualMachine />
                {features.map(({ feature, available }, index) => {
                  return (
                    <p key={index} className={!available ? "disabled" : ""}>
                      {feature}
                    </p>
                  );
                })}
                <button className="btn lg">
                  <a href={path} target="_blank" rel="noopener noreferrer">
                    Więcej
                  </a>
                </button>
              </Card>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Plans;
