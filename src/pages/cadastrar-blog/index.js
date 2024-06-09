import React, { useState } from 'react';
import CardFooter from "../../components/CardFooter";
import CardHeader from "../../components/CardHeaderAdm";
import "./index.scss";

export default function CadastrarBlog() {
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
    <section className="section-cadastrarBlog">
      <CardHeader />
      <div className="container-cadastrarBlog">
        <h1>Cadastrar novo Blog</h1>

        <div>
          <label>Titulo: </label>
          <input type="text" />
        </div>
        <div>
          <label>Resumo: </label>
          <textarea className="input-box1" />
        </div>
        <div>
          <label>Descrição: </label>
          <textarea className="input-box2"></textarea>
        </div>
        <div>
          <label>Fonte: </label>
          <input type="text" />
        </div>
        <div>
          <label>Foto do blog: </label>
          
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
        <button className="button">Adicionar blog</button>
      </div>
      <CardFooter />
    </section>
  );
}
