import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'  
import { Link } from 'react-router-dom';

export default function CardFooter() {
  
  return(

    <div className='container-footer'>
      
      <div className='box-footer'>
        <img src="/assets/images/logo.png" className='logo' alt='logo-pagina' />

        <div>
            <FontAwesomeIcon icon={faLocationDot} className="custom-pin"/>
            <div>
              <p>Rua Jandira, 123 - Indianópolis</p>
              <p>04080-002</p>
            </div>
        </div>

        <nav>
          <Link to="/exames">Resultados de exames</Link>
          <Link to='/contato'>Entre em contato</Link>
          <Link to="/trabalhe_conosco">Trabalhe conosco</Link>
        </nav>
      </div>


      <footer>
        <p> Copyright &copy; 2024 Amicitia Vet - Direitos Reservados </p>
        <a href='#'> Confira a nossa política de privacidade </a>
      </footer>
    </div>
  );
}