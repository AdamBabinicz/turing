import "./trainers.css";
import Header from "../../components/Header";
import HeaderImage from "../../images/13.jpg";
import { trainers } from "../../data";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import Trainer from "../../components/Trainer";

const Trainers = () => {
  return (
    <>
      <Header title="Rodzina, znajomi" image={HeaderImage}>
        Alan uczęszczał do szkoły przygotowawczej Hazelhurst w latach 1922-6.
        Jego szkolne listy do rodziców ujawniają zainteresowanie matematyką i
        chemią, często zawierające najnowsze wynalazki.
      </Header>
      <section className="trainers">
        <div className="container trainers__container">
          {trainers.map(({ id, image, name, job, socials }) => {
            return (
              <Trainer
                key={id}
                image={image}
                name={name}
                job={job}
                socials={[
                  { icon: <BsInstagram />, link: socials[0] },
                  { icon: <AiOutlineTwitter />, link: socials[1] },
                  { icon: <FaFacebookF />, link: socials[2] },
                ]}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Trainers;
