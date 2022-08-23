import "./gallery.css";
import Header from "../../components/Header";
import HeaderImage from "../../images/2.jpg";

const Gallery = () => {
  const galleryLength = 15;
  const images = [];

  for (let i = 1; i <= galleryLength; i++) {
    images.push(require(`../../images/g${i}.jpg`));
  }

  return (
    <>
      <Header title="Fototeka" image={HeaderImage}>
        Geniusz Turing w 1954 popełnił samobójstwo. Kiedyś kastrowany i tępiony,
        dziś wynoszony na "ołtarze".
      </Header>
      <section className="gallery">
        <div className="container gallery__container">
          {images.map((image, index) => {
            return (
              <article key={index}>
                <img src={image} alt={`Gallery Image ${index + 1}`} />
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Gallery;
