import React, { useState } from 'react';
import CardFooter from "../../components/CardFooter";
import CardHeader from "../../components/CardHeaderAdm";
import "./index.scss";

export default function CadastrarMedico() {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="section-cadastrarMedicos">
      <CardHeader />
      <div className="container-cadastrarMedicos">
        <h1>Cadastrar novo médico</h1>

        <div>
          <label>Nome do médico: </label>
          <input type="text" />
        </div>
        <div>
          <label>CRM: </label>
          <input type="text" />
        </div>
        <div>
          <label>Descrição: </label>
          <textarea className="input-box"></textarea>
        </div>
        <div>
          <label>Foto do médico: </label>
          
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: 'none' }}
            id="upload-button"
          />
          <label htmlFor="upload-button" className="button">Adicionar foto</label>
          {image && <div className="image-preview" style={{ backgroundImage: `url(${image})` }} />}
        </div>
        <button className="button">Adicionar médico</button>
      </div>
      <CardFooter />
    </section>
  );
}
