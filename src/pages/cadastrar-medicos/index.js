import React, { useState } from 'react';
import CardFooter from "../../components/CardFooter";
import CardHeader from "../../components/CardHeaderAdm";
import "./index.scss";
import { useNavigate } from 'react-router-dom';

import * as medicoApi from "../../api/medicoApi";

export default function CadastrarMedico() {
  const [id, setId] = useState("");
  const [nome, setNome] = useState("");
  const [crm, setCrm] = useState("");
  const [descricao, setDescricao] = useState("");
  const [img, setImg] = useState("");
  const [image, setImage] = useState(null);

  const navigate = new useNavigate();

  async function adicionarMedico() {
    const formData = new FormData();

    formData.append('nome', nome);
    formData.append('crm', crm);
    formData.append('descricao', descricao);
    if (img) {
      formData.append("imagem", img)
    }

    try {
      if(id === "") {
        let info = await medicoApi.adicionarMedico(formData);
        alert("Medico adicionado!");
      }

      navigate('/editar_medicos');
    } catch (error) {
      alert('erro em adicionar roupa');
      console.log(error.message);
    }
  }

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (file) {
      setImg(file);
      setImage(URL.createObjectURL(file));
    }
  }

  return (
    <section className="section-cadastrarMedicos">
      <CardHeader />
      <div className="container-cadastrarMedicos">
        <h1>Cadastrar novo médico</h1>

        <div>
          <label>Nome do médico: </label>
          <input 
            type="text" 
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div>
          <label>CRM: </label>
          <input 
            type="text"
            value={crm}
            onChange={(e) => setCrm(e.target.value)} 
          />
        </div>
        <div>
          <label>Descrição: </label>
          <textarea 
            className="input-box"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label>Foto do médico: </label>
          
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: 'none' }}
            id="upload-button"
          />
          <label htmlFor="upload-button" className="button">Adicionar foto</label>
          {image && <div className="image-preview" style={{ backgroundImage: `url(${image})` }} />}
        </div>
        <button className="button" onClick={adicionarMedico}>Adicionar médico</button>
      </div>
      <CardFooter />
    </section>
  );
}
