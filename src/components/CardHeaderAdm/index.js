import "./index.scss";
import { Link } from "react-router-dom";

export default function CardHeader() {
  return (
    <div className="App">
      <div className="header-left">
        <Link to="/">
          <img
            src="/assets/images/logo.png"
            className="logo"
            alt="logo-pagina"
          />
        </Link>
      </div>
    </div>
  );
}
