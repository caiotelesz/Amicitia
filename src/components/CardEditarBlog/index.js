import "./index.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function CardEditarMedico() {
  return (
      <div className="container-CardEditarBlog">
        <img src="assets/images/golden.jpg" alt="imagem_do_blog"/>

        <h2>
          O Que Fazer Em Caso De Emergência Com O Pet?
        </h2>

        <p>
        Confira as informações sobre o que fazer em casos de emergências com o pet. Fique atento a qualquer alteração física ou comportamental e aos tipos de emergências que podem ocorrer.
        </p>

        <div>
          <FontAwesomeIcon icon={faEdit} className="icon-Edit"/>
          <FontAwesomeIcon icon={faTrash} className="icon-Edit"/>
        </div>
      </div>
  );
}