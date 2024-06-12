import "./index.scss";
import { API_ADDRESS } from "../../api/apiAddress";

export default function CardBlog({ blog }) {
  
  const imgSrc = `${API_ADDRESS}/${blog.foto}`;

  return (
    <section className="section-cardBlog">
      <div className="container-cardBlog">
      <div>
        <img src={imgSrc} alt="imagem do blog" />
      </div>

      <div>
      <p>
        {blog.resumo ?? 'resumo do blog'}
      </p>

        <h1>
          {blog.titulo ?? 'titulo do blog'}
        </h1>
      <p>
        {blog.descricao ?? 'descrição do blog'}
      </p>
        <span>
          Font:
          <br />
          {blog.fonte ?? 'fonte do blog'}
        </span>
      </div>
      </div>
    </section>
  );
}