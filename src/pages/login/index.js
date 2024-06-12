import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";

import * as loginApi from "../../api/loginApi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./index.scss";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  async function Login() {
    let info = await loginApi.logarConta(email, senha, navigate);

    return info;
  }

  return(
    <section className="section-login">
      <div className="container-login">
        <form action="">
          <div className="first-box">
            <Link to="/">
              <img src="assets/images/logo.png" alt="logo" />
            </Link>
            <h1>Login</h1>
          </div>
          <div className="input-box">
            <input 
              type="text"
              placeholder="Usuario" 
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
            <FontAwesomeIcon icon={faUser} className="icon"/>
          </div>

          <div className="input-box">
            <input 
              type="password" 
              placeholder="Senha"
              onChange={(e) => setSenha(e.target.value)}
              required 
            />
            <FontAwesomeIcon icon={faLock} className="icon"/>
          </div>

          <button type="submit" onClick={Login}>Login</button>
        </form>
      </div>
    </section>
  );
}