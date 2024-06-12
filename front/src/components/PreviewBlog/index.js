import "./index.scss"

import { API_ADDRESS } from "../../api/apiAddress";

export default function PreviewBlog({ blog }) {
  const imgSrc = `${API_ADDRESS}/${blog.foto}`;

  return (
    <section className="section-previewBlog">
      <div className="card-previewBlog">
        <img src={imgSrc} alt="imagem do blog" />

        <h2>
          { blog.titulo ?? 'titulo do blog' }
        </h2>

        <p>
          { blog.resumo ?? 'resumo do blog' }
        </p>
      </div>
    </section>
  );
}