import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
import './index.scss';

import * as medicoApi from "../../api/medicoApi";

export default function CardEditarMedico({ doctor }) {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate(`/editar_medico/${doctor.id}`);
  };

  async function removeDoctor() {
    try {
      await medicoApi.removerMedico(doctor.id);
    } catch (error) {
      console.error('Erro ao remover o médico:', error);
    }
  }

  return (
    <div className="container-CardEditarMedico">
      <p>{doctor.nome ?? 'Nome do médico'}</p>
      <p>CRM {doctor.crm ?? 'CRM'}</p>

      <div>
        <FontAwesomeIcon icon={faEdit} className="icon-Edit" onClick={handleEditClick} />
        <FontAwesomeIcon icon={faTrash} className="icon-Edit" onClick={removeDoctor}/>
      </div>
    </div>
  );
}