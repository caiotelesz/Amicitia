import CardHeader from "../../components/CardHeader";
import CardFooter from "../../components/CardFooter";
import "./index.scss";

export default function Contato() {
  return (
    <section className="section-contato">
    <CardHeader />

    <div className="container-contato">
      <h1>Tem alguma <b>dúvida ou sugestão?</b> </h1>
      <h2>Fale conosco <b>agora mesmo!</b></h2>

      <p>envie um formulário preenchendo os campos abaixo:</p>

      <input type="text" placeholder="Nome completo" />
      <input type="text" placeholder="email" />
      <input type="text" placeholder="Nome completo" />
      <input type="text" placeholder="Assunto" />
      <textarea placeholder="Mensagem" className="msg-contato" />

      <button>ENVIAR</button>
    </div>

    <CardFooter />
  </section>
  );
}