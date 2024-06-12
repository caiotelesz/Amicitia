import CardHeader from "../../components/CardHeader";
import CardFooter from "../../components/CardFooter";
import PreviewBlog from "../../components/PreviewBlog";

import { useNavigate } from 'react-router-dom';
import * as blogApi from '../../api/blogApi';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import "./index.scss";

export default function UltimosBlogs() {
  const [listBlog, setListBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const info = await blogApi.buscarBlog();
        setListBlog(info);
      } catch (error) {
        console.error('Erro ao buscar blogs:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <section className="section-ultimosBlogs">
      <CardHeader />

      <div className="container-ultimosBlogs">
        <h1>Últimos blogs</h1>
        <div className="blog-grid">
          {listBlog.map((blog) => (
            blog && blog.titulo && (
              <Link className="navegacao" key={blog.id} to={`/blog/${blog.id}`}>
                <PreviewBlog blog={blog} />
              </Link>
            )
          ))}
        </div>
      </div>

      <CardFooter />
    </section>
  );
}
