import React, { useRef, useState } from 'react';
import CardFooter from "../../components/CardFooter";
import CardHeader from "../../components/CardHeader";
import "./index.scss";

export default function TrabalheConosco() {
  const fileInputRef = useRef(null);

  const fileClick = () => {
    fileInputRef.current.click();
  };

  const fileChange = (event) => {
    const fileName = event.target.files[0] ? event.target.files[0].name : '';
    setFormData({ ...formData, fileName });
  };

  const buttonChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  const enviar = () => {
    alert('Currículo enviado!');
    setFormData({
      name: '',
      dateOfBirth: '',
      email: '',
      phone: '',
      address: '',
      fileName: ''
    });
    fileInputRef.current.value = null;
  };

  const [formData, setFormData] = useState({
    name: '',
    dateOfBirth: '',
    email: '',
    phone: '',
    address: '',
    fileName: ''
  });

  return (
    <section className="section-trabalharConosco">
      <CardHeader />

      <div className="card-trabalharConosco">
        <h1>Gostaria de fazer parte da nossa equipe?</h1>
        <h2>Envie suas informações agora mesmo!</h2>

        <div className="input-group">
          <label htmlFor="name">Nome</label>
          <input
            id="name"
            type="text"
            placeholder="Nome"
            value={formData.name}
            onChange={buttonChange}
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
          />
        </div>

        <div className="input-group">
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="text"
            placeholder="E-mail"
            value={formData.email}
            onChange={buttonChange}
          />
        </div>

        <div className="input-group">
          <label htmlFor="phone">Telefone</label>
          <input
            id="phone"
            type="text"
            placeholder="Telefone"
            value={formData.phone}
            onChange={buttonChange}
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
          />
        </div>

        <div className="input-group">
          <label htmlFor="file-upload">Currículo</label>
          <input
            id="file-name"
            type="text"
            placeholder="Currículo"
            readOnly
            value={formData.fileName}
            onClick={fileClick}
          />
          <input
            id="file-upload"
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={fileChange}
          />
        </div>

        <button onClick={enviar}>ENVIAR</button>
      </div>

      <CardFooter />
    </section>
  );
}
