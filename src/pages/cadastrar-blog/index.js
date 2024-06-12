import React, { useState } from 'react';
import CardFooter from "../../components/CardFooter";
import CardHeader from "../../components/CardHeaderAdm";
import "./index.scss";
import { useNavigate } from 'react-router-dom';
import * as blogApi from "../../api/blogApi";

export default function CadastrarBlog() {
  const [id, setId] = useState("");
  const [titulo, setTitulo] = useState("");
  const [resumo, setResumo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [fonte, setFonte] = useState("");
  const [foto, setFoto] = useState(null);
  const [image, setImage] = useState(null);

  const navigate = new useNavigate();

  async function adicionarBlog() {
    const formData = new FormData();

    formData.append('titulo', titulo);
    formData.append('resumo', resumo);
    formData.append('descricao', descricao);
    formData.append('fonte', fonte);
    if (foto) {
      formData.append('imagem', foto);  // 'imagem' deve ser o nome esperado pelo backend
    }

    try {
      if (id === "") {
        let info = await blogApi.adicionarBlog(formData);
        alert('Blog adicionado!');
      }

      navigate('/editar_blog');
    } catch (error) {
      alert('erro em adicionar o blog');
      console.log(error.message);
    }
  }

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFoto(file);  // Definindo o arquivo de imagem aqui
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
          <input 
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)} 
          />
        </div>
        <div>
          <label>Resumo: </label>
          <textarea 
            className="input-box1" 
            value={resumo}
            onChange={(e) => setResumo(e.target.value)}
          />
        </div>
        <div>
          <label>Descrição: </label>
          <textarea 
            className="input-box2"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label>Fonte: </label>
          <input 
            type="text" 
            value={fonte}
            onChange={(e) => setFonte(e.target.value)}
          />
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
        <button className="button" onClick={adicionarBlog}>Adicionar blog</button>
      </div>
      <CardFooter />
    </section>
  );
}
