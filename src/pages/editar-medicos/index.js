import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

import { API_ADDRESS } from '../../api/apiAddress';

import CardFooter from "../../components/CardFooter";
import CardHeader from "../../components/CardHeaderAdm";
import "./index.scss";

export default function EditarMedico() {
  const [nome, setNome] = useState('');
  const [crm, setCrm] = useState('');
  const [descircao, setDescricao] = useState('');
  const [id, setId] = useState('');
  const [image, setImage] = useState(null);
  const [img, setImg] = useState(''); 

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
        setImage(doctor.image);
      } catch (error) {
        console.error('Erro ao buscar o item:', error);
        alert('Erro ao buscar o item.');
      }
    }

    if (doctorId) {
      fetchItem();
    }
  }, [doctorId]);

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
        <button className="button">Editar médico</button>
      </div>
      <CardFooter />
    </section>
  );
}
