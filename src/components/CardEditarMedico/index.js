import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
import './index.scss';

export default function CardEditarMedico({ doctor }) {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate(`/editar_medico/${doctor.id}`);
  };

  // async function removeDoctor(id) {
  //   let info = await medicoApi.removerMedico(id);
  //   return info;
  // }

  return (
    <div className="container-CardEditarMedico">
      <p>{doctor.nome ?? 'Nome do médico'}</p>
      <p>CRM {doctor.crm ?? 'CRM'}</p>

      <div>
        <FontAwesomeIcon icon={faEdit} className="icon-Edit" onClick={handleEditClick} />
        <FontAwesomeIcon icon={faTrash} className="icon-Edit" />
      </div>
    </div>
  );
}
