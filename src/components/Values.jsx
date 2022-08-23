import React from "react";
import Image from "../images/7.png";
import SectionHead from "./SectionHead";
import { GiLaurelsTrophy } from "react-icons/gi";
import { values } from "../data";
import Card from "../UI/Card";

const Values = () => {
  return (
    <section className="values">
      <div className="container values__container">
        <div className="values__left">
          <div className="values__image">
            <img src={Image} alt="..." />
          </div>
        </div>
        <div className="values__right">
          <SectionHead icon={<GiLaurelsTrophy />} title="Osiągnięcia" />
          <p>
            W 2019 przez Brytyjczyków został uznany za najwybitniejszą postać XX
            w.
          </p>
          <div className="values__wrapper">
            {values.map(({ id, icon, title, desc }) => {
              return (
                <Card key={id} className="values__value">
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <small>{desc}</small>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
