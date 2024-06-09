import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";

import "./index.scss";
import { Link } from "react-router-dom";

export default function Login() {
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
            <input type="text" placeholder="Usuario" required />
            <FontAwesomeIcon icon={faUser} className="icon"/>
          </div>

          <div className="input-box">
            <input type="password" placeholder="Senha" required />
            <FontAwesomeIcon icon={faLock} className="icon"/>
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    </section>
  );
}