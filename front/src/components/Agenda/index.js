import "./index.scss";
import { Link } from "react-router-dom";

export default function AgendarHorario() {
  return (
    <>
      <div className="content-home3">
        <h1>Quer Agendar um horário para seu pet?</h1>
        <p>entre em contato</p>
        <div className="content1">
        <Link to={`https://wa.me/message/5540028922`}>
          <button className="button">Chamar no Whatsapp (11) 4002-8922 </button>
        </Link>
        <Link to={`mailto:amicitiaclinic@vet.com`}>
          <button className="button">
            Chamar no e-mail amicitiaclinic@vet.com
          </button>
        </Link>
        </div>
      </div>
      <div className="image-container">
        <img src="assets/images/golden.jpg" alt="Pet" className="image" />
      </div>
    </>
  );
}
