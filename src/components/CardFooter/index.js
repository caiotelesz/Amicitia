import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'  

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
          <a href='#'>Resultados de exames</a>
          <a href='#'>Entre em contato</a>
          <a href='#'>Trabalhe conosco</a>
        </nav>
      </div>


      <footer>
        <a href='#'> Copyright &copy; 2024 Amicitia Vet - Direitos Reservados </a>
        <a href='#'> Confira a nossa política de privacidade </a>
      </footer>
    </div>
  );
}