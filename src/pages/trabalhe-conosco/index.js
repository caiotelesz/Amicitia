import React, { useRef, useState } from "react";
import CardFooter from "../../components/CardFooter";
import CardHeader from "../../components/CardHeader";
import "./index.scss";

export default function TrabalheConosco() {
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    dateOfBirth: "",
    email: "",
    phone: "",
    address: "",
    fileName: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const fileClick = () => {
    fileInputRef.current.click();
  };

  const fileChange = (event) => {
    const fileName = event.target.files[0] ? event.target.files[0].name : "";
    setFormData({ ...formData, fileName });
  };

  const buttonChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  const enviar = (event) => {
    event.preventDefault();
    const { name, dateOfBirth, email, phone, address, fileName } = formData;

    if (!name || !dateOfBirth || !email || !phone || !address || !fileName) {
      setErrorMessage("Por favor, preencha todos os campos.");
      return;
    }

    alert("Currículo enviado!");
    setFormData({
      name: "",
      dateOfBirth: "",
      email: "",
      phone: "",
      address: "",
      fileName: "",
    });
    fileInputRef.current.value = null;
    setErrorMessage("");
  };

  return (
    <>
      <CardHeader />
      <section className="section-trabalharConosco">
        <div className="card-trabalharConosco">
          <h1>Gostaria de fazer parte da nossa equipe?</h1>
          
          <div className="center">
          <h2>Envie suas informações agora mesmo!</h2>
          </div>

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <form onSubmit={enviar}>
            <div className="input-group">
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                type="text"
                placeholder="Nome"
                value={formData.name}
                onChange={buttonChange}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="dateOfBirth">Data de Nascimento</label>
              <input
                id="dateOfBirth"
                type="date"
                placeholder="dd/mm/yyyy"
                value={formData.dateOfBirth}
                onChange={buttonChange}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                type="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={buttonChange}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="phone">Telefone</label>
              <input
                id="phone"
                type="tel"
                placeholder="Telefone"
                value={formData.phone}
                onChange={buttonChange}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="address">Endereço</label>
              <input
                id="address"
                type="text"
                placeholder="Endereço"
                value={formData.address}
                onChange={buttonChange}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="file-upload">Currículo</label>
              <input
                id="file-name"
                type="text"
                placeholder="Clique aqui"
                readOnly
                value={formData.fileName}
                onClick={fileClick}
                required
              />
              <input
                id="file-upload"
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={fileChange}
                required
              />
            </div>

            <div className="center">
            <button type="submit">ENVIAR</button>
            </div>
          </form>
        </div>
      </section>
      <CardFooter />
    </>
  );
}
