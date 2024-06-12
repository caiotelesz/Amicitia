import CardBlog from "../../components/CardBlog";
import CardFooter from "../../components/CardFooter";
import CardHeader from "../../components/CardHeader";

import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import * as blogApi from '../../api/blogApi';

import "./index.scss";

export default function Blog() {
  const [listBlog, setListBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { blogId } = useParams();

  useEffect(() => {
    async function fetchBlog() {
      try {
        const info = await blogApi.buscarBlog();
        setListBlog(info);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchBlog();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro: {error}</div>;
  }

  const blogSelecionado = listBlog.find(blog => blog.id === parseInt(blogId));

  if (!blogSelecionado) {
    return <div>Blog não encontrado</div>;
  }

  return (
    <section className="section-blog">
      <CardHeader />

      <div className="container-blog">
        <CardBlog
          key={blogSelecionado.id}
          blog={blogSelecionado}
        />
      </div>

      <CardFooter />
    </section>
  );
}
