import axios from "axios";

import { API_ADDRESS } from "./apiAddress";

// Listar médico
export async function buscarMedico() {
  let url = API_ADDRESS + '/medico';

  try{
    let r = await axios.get(url);
    return r.data;
  } catch (error) {
      console.log('Erro ao procurar médico: ' + error);
  }
}

// Adicionar medico
export async function adicionarMedico(corp) {
  let url = API_ADDRESS + '/medico';

  let r = await axios.post(url, corp);
  return r.data;
}

// Editar médico
export async function editarMedico(id, nome, crm, descricao) {
  const url = API_ADDRESS + `/medico/${id ? id : ''}`;
  const corp = {
    nome,
    crm, 
    descricao
  }

  try {
    if(id) {
      await axios.put(url, corp);
      alert('Medico alterado com sucesso.');
    } else {
      const response = await axios(url, corp);
      alert('Medico inserido com ID: ' + response.data.id);
    }
  } catch(error) {
    console.log('Erro ao salvar o Medico: ' + error);
    alert('Erro ao salvar o Medico.');
  }
}

// Deletar medico
export async function removerMedico(id) {
  if(!id) {
    alert('Selecione um medico para remover.');
    return;
  }

  const url = API_ADDRESS + `/medico/${id}`;

  try {
    await axios.delete(url);
    alert('Médico removido com sucesso.');
  } catch (error) {
    console.error('Erro ao remover o produto: ' + error);
    alert('Erro ao remover o médico.');
  }
}