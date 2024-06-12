import { useNavigate } from 'react-router-dom';
import CardFooter from '../../components/CardFooter';
import CardHeaderAdm from '../../components/CardHeaderAdm';
import CardEditarBlog from '../../components/CardEditarBlog';
import SideBar from '../../components/SideBarItem';
import './index.scss';

import * as blogApi from '../../api/blogApi';
import { useEffect, useState } from 'react';

export default function EditarBlog() {
  const [listBlog, setListBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchDoctors() {
      try {
        const info = await blogApi.buscarBlog();
        setListBlog(info);
      } catch (error) {
        console.error('Erro ao buscar médicos:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  const addBlog = () => {
    navigate('/cadastrar_blog');
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Erro ao carregar médicos. Por favor, tente novamente mais tarde.</p>;
  }

  return (
    <section className="section-editarBlogs">
      <CardHeaderAdm />
      <div className="container-editarBlogs">
        <SideBar className="sidebar" />
        <div className="main">
          <h1>GERENCIAR BLOGS</h1>

          <div>
            {listBlog.map((blog) => (
              <CardEditarBlog key={blog.id} blog={blog} />
            ))}
          </div>

          <button className="button" onClick={addBlog}>
            Adicionar blog
          </button>
        </div>
      </div>
      <CardFooter />
    </section>
  );
}
