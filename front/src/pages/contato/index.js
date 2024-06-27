import React, { useState } from 'react';
import CardHeader from "../../components/CardHeader";
import CardFooter from "../../components/CardFooter";
import "./index.scss";

export default function Contato() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const inputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const submit = (event) => {
    event.preventDefault(); // Prevenir o comportamento padrão de envio
    if (formData.fullName && formData.email) { // Validar os campos obrigatórios aqui
      alert('Mensagem enviada!');
      setFormData({
        fullName: '',
        email: '',
        subject: '',
        message: ''
      });
    } else {
      alert('Por favor, preencha os campos obrigatórios.');
    }
  };

  return (
    <section className="section-contato">
      <CardHeader />

      <div className="container-contato">
        <h1>Tem alguma <b>dúvida ou sugestão?</b></h1>
        <h2>Fale conosco <b>agora mesmo!</b></h2>

        <p>Envie um formulário preenchendo os campos abaixo:</p>

          <input
            name="fullName"
            type="text"
            placeholder="Nome completo *"
            value={formData.fullName}
            onChange={inputChange}
            required
          />

          <input
            name="email"
            type="email"
            placeholder="E-mail *"
            value={formData.email}
            onChange={inputChange}
            required
          />

          <input
            name="subject"
            type="text"
            placeholder="Assunto"
            value={formData.subject}
            onChange={inputChange}
            required
          />

          <textarea
            name="message"
            placeholder="Mensagem"
            className="msg-contato"
            value={formData.message}
            onChange={inputChange}
          />

        <div>
          <button onClick={submit}>ENVIAR</button>
        </div>
      </div>

      <CardFooter />
    </section>
  );
}
