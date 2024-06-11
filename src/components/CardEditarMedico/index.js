import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function CardEditarMedico({ doctor, onDelete }) {
  return (
    <div className="container-CardEditarMedico">
      <p>{doctor.nome ?? 'Nome do médico'}</p>
      <p>CRM {doctor.crm ?? 'CRM'}</p>

      <div>
        <FontAwesomeIcon icon={faEdit} className="icon-Edit"/>
        <FontAwesomeIcon icon={faTrash} className="icon-Edit" onClick={onDelete}/>
      </div>
    </div>
  );
}
