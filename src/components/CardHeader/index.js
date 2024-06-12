import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { Link } from "react-router-dom";

export default function CardHeader() {
  return (
    <div className="App-header">
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
            <Link to="/nossos_profissionais">NOSSOS PROFISSIONAIS</Link>
          </li>
          <li>
            <Link to="/contato">CONTATO</Link>
          </li>
          <li>
            <Link to="/trabalhe_conosco">TRABALHE CONOSCO</Link>
          </li>

          <div className='icons-header'>
          <div>
            <a href='/login'>
            <FontAwesomeIcon icon={faUser} className="custom-userIcon"/>
            </a>
          </div>
        </div>
        </ul>
      </nav>
    </div>
  );
}
