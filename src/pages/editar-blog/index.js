import { useNavigate } from 'react-router-dom';
import CardFooter from '../../components/CardFooter';
import CardHeaderAdm from '../../components/CardHeaderAdm';
import CardEditarBlog from '../../components/CardEditarBlog';
import SideBar from '../../components/SideBarItem';
import './index.scss';

export default function EditarBlog() {
  const navigate = useNavigate();

  const addBlog = () => {
    navigate('/cadastrar_blog');
  };

  return (
    <section className="section-editarBlogs">
      <CardHeaderAdm />
      <div className="container-editarBlogs">
        <SideBar className="sidebar" />
        <div className="main">
          <h1>GERENCIAR BLOGS</h1>

          <div>
            <CardEditarBlog />
            <CardEditarBlog />
            <CardEditarBlog />
            <CardEditarBlog />
            <CardEditarBlog />
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
