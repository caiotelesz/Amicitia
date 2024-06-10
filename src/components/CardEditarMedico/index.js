import "./index.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function CardEditarMedico() {
  return (
      <div className="container-CardEditarMedico">
        <p>Nome do doutor</p>
        <p>CRM</p>

        <div>
          <FontAwesomeIcon icon={faEdit} className="icon-Edit"/>
          <FontAwesomeIcon icon={faTrash} className="icon-Edit"/>
        </div>
      </div>
  );
}