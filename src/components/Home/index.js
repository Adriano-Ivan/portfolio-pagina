import "./index.scss";
import LogoSubtitleA from "../../assets/images/logo_subA.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Olá, <br /> Sou Adriano Ivan
          <br />
          web developer
        </h1>
        <h2>Desenvolvedor FullStack / JavaScript / C#</h2>
        <Link to="/contact" className="flat-button">
          Contate-me
        </Link>
      </div>
    </div>
  );
};

export default Home;
