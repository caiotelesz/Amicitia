import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./pages/home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NotFound from "./pages/not-found";
import Exames from "./pages/exames";
import UltimoBlogs from "./pages/ultimos-blogs";
import Blog from "./pages/blog";
import Contato from "./pages/contato";
import TrabalheConosco from "./pages/trabalhe-conosco";
import NossosProfissionais from "./pages/nossos-profissionais";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/exames" element={<Exames />} />
        <Route path="/blog" element={<UltimoBlogs />} />
        <Route path="/blogg" element={<Blog />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/trabalhe_conosco" element={<TrabalheConosco />} />
        <Route path="/nossos_profissionais" element={<NossosProfissionais />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
