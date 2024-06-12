import axios from "axios";

import { API_ADDRESS } from "./apiAddress";

// Logar Conta
export async function logarConta(email, senha, navigate) {
  try {
    const url = API_ADDRESS + '/login/entrar';
    const r = await axios.post(url, {email: email, password: senha });
    const userData = r.data;

    if (userData && userData.loggedIn) {  
      navigate('/adm');
    } else {
      alert("Verifique se o email ou senha está certo");
    }
  } catch (error) {
    alert("Verifique se o email ou senha está certo");
  }
}