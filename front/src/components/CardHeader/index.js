import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faX } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

export default function CardHeader() {
  function closeOpen() {
    document
      .querySelector(".section-header #sideBar-closed")
      .classList.toggle("closed");
    document
      .querySelector(".section-header #sideBar-open")
      .classList.toggle("closed");
  }

  return (
    <header className="section-header">
      <div className="App-header">
        <div className="header-left">
          <Link to="/">
            <img
              src="/assets/images/logo.png"
              className="logo"
              alt="logo-pagina"
            />
          </Link>
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
          </ul>
        </nav>

        <div className="icons-header">
          <a href="/login">
            <FontAwesomeIcon icon={faUser} className="custom-userIcon" />
          </a>
        </div>
      </div>

      <div id="header-closed" className="menu-mobile-open">
        <button onClick={closeOpen}>
          <FontAwesomeIcon icon={faList} className="icon" />
        </button>

        <div id="sideBar-open" className="menu-mobile">
        <div className="btn-close">
          <FontAwesomeIcon icon={faX} className='btn-fechar' onClick={closeOpen}/>
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
          </ul>
        </nav>
      </div>
      </div>
    </header>
  );
}
