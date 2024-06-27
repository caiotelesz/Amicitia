import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faX } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

export default function CardHeader() {
  function closeOpen() {
    document.querySelector(".menu-mobile").classList.toggle("open");
    document.querySelector(".menu-mobile-list").classList.toggle("hidden");
  }

  function closeMenu() {
    document.querySelector(".menu-mobile").classList.remove("open");
    document.querySelector(".menu-mobile-list").classList.remove("hidden");
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

      {/* Mobile */}
      <div id="sideBar-closed" className="menu-mobile-list">
        <button onClick={closeOpen}>
          <FontAwesomeIcon icon={faList} className="icon-open" />
        </button>
      </div>

      <div id="header-closed" className="menu-mobile">
        <div className="btn-close">
          <FontAwesomeIcon icon={faX} className="btn-fechar" onClick={closeOpen} />
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/#agendar-horario" onClick={closeMenu}>AGENDAR HORÁRIO</Link>
            </li>
            <li>
              <Link to="/exames" onClick={closeMenu}>RESULTADOS DE EXAMES</Link>
            </li>
            <li>
              <Link to="/nossos_profissionais" onClick={closeMenu}>NOSSOS PROFISSIONAIS</Link>
            </li>
            <li>
              <Link to="/contato" onClick={closeMenu}>CONTATO</Link>
            </li>
            <li>
              <Link to="/trabalhe_conosco" onClick={closeMenu}>TRABALHE CONOSCO</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
