import "./index.scss";


import { API_ADDRESS } from "../../api/apiAddress";

export default function Veterinario({ doctor }) {
  const imgSrc = `${API_ADDRESS}/${doctor.img}`;

  return (
    <div className="card-veterinario">
      <img src={imgSrc} alt="foto_medico" className="image"/>

      <div>
        <h3>{doctor.nome ?? 'Nome do médico'}</h3>
        <div>
          <span>CRMV {doctor.crm ?? 'CRM'}</span>
          <p>
            {doctor.descricao ?? "descrição do médico"}
          </p>
        </div>
      </div>
    </div>
  );
}
