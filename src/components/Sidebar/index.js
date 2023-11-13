import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import LogoA from "../../assets/images/logo_a.png";
import LogoSubtitleA from "../../assets/images/logo_subA.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Sidebar() {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        {/* <img src={LogoA} alt="logo" /> */}
        <img className="sub-logo" src={LogoSubtitleA} alt="logo" />
      </Link>

      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/adriano-ivan-de-paula-campos-93b87122a/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" size="lg" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Adriano-Ivan"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" size="lg" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
