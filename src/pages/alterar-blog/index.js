import React, { useEffect, useState } from 'react';
import CardFooter from "../../components/CardFooter";
import CardHeader from "../../components/CardHeaderAdm";
import "./index.scss";
import { useNavigate, useParams } from 'react-router-dom';
import * as blogApi from "../../api/blogApi";
import axios from 'axios';
import { API_ADDRESS } from '../../api/apiAddress';

export default function AlterarBlog() {
  const [id, setId] = useState("");
  const [titulo, setTitulo] = useState("");
  const [resumo, setResumo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [fonte, setFonte] = useState("");
  const [foto, setFoto] = useState('');
  const [image, setImage] = useState(null);

  const { blogId } = useParams();
  const navigate = new useNavigate();

  useEffect(() => {
    async function fetchItem() {
      try {
        const response = await axios.get(API_ADDRESS + `/blog/${blogId}`);
        const blog = response.data;
        setId(blog.id);
        setTitulo(blog.titulo);
        setResumo(blog.resumo);
        setDescricao(blog.descricao);
        setFonte(blog.fonte);
        setImage(blog.image);
        setFoto(`${API_ADDRESS}/${blog.foto}`);
      } catch (error) {
        console.error('Erro ao buscar o item: ', error);
        alert('Erro ao buscar o item.');
      }
    }
      if (blogId) {
        fetchItem();
      }
  }, [blogId]);

  async function alterarBlog() {
    let info = await blogApi.editarBlog(id, titulo, resumo, descricao, fonte);

    return info;
  }
  
  async function alterarImagem(e) {
    if (!id) {
      alert('Salve o produto antes de alterar a imagem.');
      return;
    }

    const file = e.target.files[0];
    const url = API_ADDRESS + `/blog/imagem/${id}`

    const form = new FormData();
    form.append('imagem', file);

    try {
      await axios.put(url, form, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      alert('Imagem alterada com sucesso.');
      setFoto(URL.createObjectURL(file));
    } catch (error) {
      console.error('Erro ao alterar a imagem:', error);
      alert('Erro ao alterar a imagem.');
    }
  }

  return (
    <section className="section-cadastrarBlog">
      <CardHeader />
      <div className="container-cadastrarBlog">
        <h1>Cadastrar novo Blog</h1>

        <div>
          <label>Titulo: </label>
          <input 
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)} 
          />
        </div>
        <div>
          <label>Resumo: </label>
          <textarea 
            className="input-box1" 
            value={resumo}
            onChange={(e) => setResumo(e.target.value)}
          />
        </div>
        <div>
          <label>Descrição: </label>
          <textarea 
            className="input-box2"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label>Fonte: </label>
          <input 
            type="text" 
            value={fonte}
            onChange={(e) => setFonte(e.target.value)}
          />
        </div>
        <div>
          <label>Foto do blog: </label>
          
          <label htmlFor="imagem" className='button'>Editar Imagem</label>
            <input
              type="file"
              id="imagem"
              style={{ display: "none" }}
              onChange={alterarImagem}
            />
          
          <img src={foto} alt="imagem do blog" className='image-preview'/>
        </div>
        <button className="button" onClick={alterarBlog}>Editar blog</button>
      </div>
      <CardFooter />
    </section>
  );
}
