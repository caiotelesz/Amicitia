import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function CardHeader() {
  return (
    <div className="App">
      <div className="header-left">
        <Link to="/">
          <img
            src="/assets/images/logo.png"
            className="logo"
            alt="logo-pagina"
          />
        </Link>
        <div>
          <FontAwesomeIcon icon={faLocationDot} className="custom-pin" />
          <div>
            <p>Rua Jardins, 123 - Indianópolis</p>
            <p>04080-002</p>
          </div>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/#agendar-horario">AGENDAR HORÁRIO</Link>
          </li>
          <li>
            <Link to="/exames">RESULTADOS DE EXAMES</Link>
          </li>
          <li>
            <a href="#">NOSSOS PROFISSIONAIS</a>
          </li>
          <li>
            <Link to="/contato">CONTATO</Link>
          </li>
          <li>
            <a href="#">TRABALHE CONOSCO</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
