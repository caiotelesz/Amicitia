import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./pages/home";
import Contato from "./pages/contato";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Exames from "./pages/exames";
import TrabalheConosco from "./pages/trabalhe-conosco";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/exames" element={<Exames />} />
        <Route path="/trabalhe_conosco" element={<TrabalheConosco />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
