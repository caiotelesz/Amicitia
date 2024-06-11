import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

import { API_ADDRESS } from '../../api/apiAddress';

import CardFooter from "../../components/CardFooter";
import CardHeader from "../../components/CardHeaderAdm";
import "./index.scss";

import * as medicoApi from '../../api/medicoApi';

export default function AlterarMedicos() {
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [crm, setCrm] = useState('');
  const [descricao, setDescricao] = useState('');
  const [image, setImage] = useState(null);
  const [img, setImg] = useState('');
  const [newImg, setNewImg] = useState(''); 

  const { doctorId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchItem() {
      try {
        const response = await axios.get(API_ADDRESS + `/medico/${doctorId}`);
        const doctor = response.data;
        setId(doctor.id);
        setNome(doctor.nome);
        setCrm(doctor.crm);
        setDescricao(doctor.descricao);
        if(newImg) {
          FormData.append("imagem", newImg);
        }
        setImg(`${API_ADDRESS}/${doctor.img}`)
      } catch (error) {
        console.error('Erro ao buscar o item:', error);
        alert('Erro ao buscar o item.');
      }
    }

    if (doctorId) {
      fetchItem();
    }
  }, [doctorId]);

  async function alterarImagem(e) { 
    if (!id) {
      alert('Salve o produto antes de alterar a imagem.');
      return;
    }

    const file = e.target.files[0]; 
    const url = API_ADDRESS + `/roupa/imagem/${id}`;

    const form = new FormData();
    form.append('imagem', file);

    try {
      await axios.put(url, form, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      alert('Imagem alterada com sucesso.');
      setImg(URL.createObjectURL(file));
    } catch (error) {
      console.error('Erro ao alterar a imagem:', error);
      alert('Erro ao alterar a imagem.');
    }
  }

  async function alterarMedico() {
    let info = await medicoApi.editarMedico(id, nome, crm, descricao, newImg);

    alert('medico alterado');

    return info;
  }

  return (
    <section className="section-cadastrarMedicos">
      <CardHeader />
      <div className="container-cadastrarMedicos">
        <h1>Editar médico</h1>

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
          
          <label htmlFor="imagem" className='button'>Editar Imagem</label>
            <input
              type="file"
              id="imagem"
              style={{ display: "none" }}
              onChange={alterarImagem}
            />
          
          <img src={img} alt="rosto do médico" className='image-preview'/>
        </div>
        <button className="button" onClick={alterarMedico}>Editar médico</button>
      </div>
      <CardFooter />
    </section>
  );
}
