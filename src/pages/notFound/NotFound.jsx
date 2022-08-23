import "./notfound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section>
      <div className="container notfound__container">
        <h2>Strony nie znaleziono!</h2>
        <Link to="/" className="btn">
          Powrót
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
