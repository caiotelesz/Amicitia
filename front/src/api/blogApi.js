import axios from "axios";

import { API_ADDRESS } from "./apiAddress";

// Listar Blog
export async function buscarBlog() {
  let url = API_ADDRESS + '/blog';

  try {
    let r = await axios.get(url);
    return r.data;
  } catch (error) {
    console.log('Erro ao procurar médico: ' + error);
  }
}

// Adicionar blog
export async function adicionarBlog(corp) {
  let url = API_ADDRESS + '/blog';

  let r = await axios.post(url, corp);
  return r.data;
}

// Editar blog
export async function editarBlog(id, titulo, resumo, descricao, fonte) {
  const url = API_ADDRESS + `/blog/${id ? id : ''}`;
  const corp = {
    titulo,
    resumo, 
    descricao,
    fonte
  }

  try {
    if(id) {
      await axios.put(url, corp);
      alert('Blog alterado com sucesso.');
    }
  } catch(error) {
    console.log('Erro ao salvar o blog: ' + error);
    alert('Erro ao salvar o Blog.');
  }
}

// Deletar blog
export async function removerBlog(id) {
  if(!id) {
    alert('Selecione um blog para remover.');
    return;
  }

  const url = API_ADDRESS + `/blog/${id}`;

  try {
    await axios.delete(url);
    alert('Blog removido com sucesso.');
  } catch (error) {
    console.error('Erro ao remover o produto: ' + error);
    alert('Erro ao remover o blog.');
  }
}