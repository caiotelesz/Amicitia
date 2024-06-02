import "./index.scss";

export default function AgendarHorario() {
  return (
    <>
      <div className="content-home3">
        <h1>Quer Agendar um horário para seu pet?</h1>
        <p>entre em contato</p>
        <div className="content1">
          <button className="button">
            Chamar no Whatsapp (11) 4002-8922
          </button>
          <button className="button">
            Chamar no e-mail amicitiaclinic@vet.com
          </button>
        </div>
      </div>
      <div className="image-container">
        <img src="assets/images/golden.jpg" alt="Pet" className="image" />
      </div>
    </>
  );
}
