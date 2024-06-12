import CardHeader from "../../components/CardHeader";
import CardFooter from "../../components/CardFooter";

import { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { faDog } from "@fortawesome/free-solid-svg-icons";

import "./index.scss";
import AgendarHorario from "../../components/Agenda";
import PreviewBlog from "../../components/PreviewBlog";
import * as blogApi from '../../api/blogApi';

export default function Home() {
  const location = useLocation();
  const [listBlog, setListBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  
  return (
    <section className="section1">
      <div className="home1">
        <h1>
          Estamos Aqui Para Cuidar do <b>Seu Pet</b>
        </h1>
      </div>

      <div className="home2">
        <h1>Tudo que o seu pet precisa.</h1>
        <p>
          atendimento veterinário - cirurgia geral - Exames laboratoriais -
          vacinas importadas Farmácia Veterinária - Banho e tosa - Taxi Dog
          (Serviço de leva e traz)
        </p>
        <div>
          <div className="container-home2">
            <FontAwesomeIcon icon={faEnvelopeOpen} className="icon-Home" />
            <h2>Nossa História</h2>
            <p>
              A clínica veterinária Amicitia, é um ponto de referência na
              comunidade. Com uma equipe dedicada, oferece serviços de qualidade
              e promove a educação sobre cuidados com animais. É um centro de
              cuidado e compaixão, fortalecendo os laços entre humanos e animais
              na cidade.
            </p>
          </div>
          <div className="container-home2">
            <FontAwesomeIcon icon={faDog} className="icon-Home" />
            <h2>O que fazemos?</h2>
            <p>
              Nosso objetivo é entregar serviços veterinários de alta qualidade
              para cães e gatos, incluindo:
              <ul>
                <li>Clínica geral</li>
                <li>Cirurgias</li>
                <li>Exames laboratoriais</li>
                <li>Vacinação</li>
                <li>Estética Animal</li>
                <li>Farmácia Veterinária</li>
                <li>Pet-shop.</li>
              </ul>
            </p>
          </div>
        </div>
      </div>

      <div className="home3" id="agendar-horario">
        <AgendarHorario />
      </div>

      <div className="home4">

        <Link to="/ultimo_blog" className="link-blog">
          <h1>Últimos blogs</h1>
        </Link>
        <div className="blog-grid">
        {listBlog.slice(-2).map((blog) => (
            blog && blog.titulo && (
              <Link className="link-blog" key={blog.id} to={`/blog/${blog.id}`}>
                <PreviewBlog blog={blog} />
              </Link>
            )
          ))}
        </div>
      </div>
    </section>
  );
}
