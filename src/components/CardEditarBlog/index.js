import "./index.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import * as blogApi from "../../api/blogApi";
import { API_ADDRESS } from "../../api/apiAddress";

export default function CardEditarMedico({ blog }) {
  const navigate = useNavigate();

  const editClick = () => {
    navigate(`/editar_blog/${blog.id}`);
  };

  async function removeBlog() {
    try {
      await blogApi.removerBlog(blog.id);
    } catch (error) {
      console.error('Erro ao remover o médico: ', error);
    }
  }

  const imgSrc = `${API_ADDRESS}/${blog.foto}`;

  return (
      <div className="container-CardEditarBlog">
        <img src={imgSrc} alt="imagem do blog"/>

        <h2>
          {blog.titulo ?? 'titulo do blog'}
        </h2>

        <p>
         {blog.resumo ?? 'resumo do blog'}
        </p>

        <div>
          <FontAwesomeIcon icon={faEdit} className="icon-Edit" onClick={editClick}/>
          <FontAwesomeIcon icon={faTrash} className="icon-Edit" onClick={removeBlog}/>
        </div>
      </div>
  );
}