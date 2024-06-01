import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons' 


export default function CardHeader() {
  return (
    <div className="App">
        <div className="header-left">
        <img src="/assets/images/logo.png" className="logo" alt="logo-pagina" />

          <div>
            <FontAwesomeIcon icon={faLocationDot} className="custom-pin"/>
            <div>
              <p>Rua Jardins, 123 - Indianópolis</p>
              <p>04080-002</p>
            </div>
          </div>
        </div>
        <nav>
          <ul>
            <li><a href="#">RESULTADOS DE EXAMES</a></li>
            <li><a href="#">AGENDAR HORÁRIO</a></li>
            <li><a href="#">NOSSOS PROFISSIONAIS</a></li>
            <li><a href="#">CONTATO</a></li>
            <li><a href="#">TRABALHE CONOSCO</a></li>
          </ul>
        </nav>
    </div>
  );
}
