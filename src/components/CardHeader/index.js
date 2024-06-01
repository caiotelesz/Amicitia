import './index.scss';


export default function CardHeader() {
  return (
    <div className="App">
        <div className="header-left">
        <img src="/assets/images/logo.png" className="logo" alt="logo-pagina" />

          <div>
            <p>Rua Jardins, 123 - Indianópolis</p>
            <p>04080-002</p>
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
