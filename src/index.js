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
import Privacidade from "./pages/privacidade";
import Login from "./pages/login";
import AdmPage from "./pages/adm-page";
import CadastrarMedico from "./pages/cadastrar-medicos";
import CadastrarBlog from "./pages/cadastrar-blog";
import EditarMedicos from "./pages/editar-medico";
import EditarBlog from "./pages/editar-blog";
import AlterarMedicos from "./pages/alterar-medicos";
import PrivateRoute from "./privateRoute";
import AlterarBlog from "./pages/alterar-blog";

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
        <Route path="/privacidade" element={<Privacidade />} />
        <Route path="/login" element={<Login />} />

        {/* Administrador */}
        <Route path="/adm" element={<PrivateRoute element={AdmPage} />} />
        <Route path="/cadastrar_medicos" element={<PrivateRoute element={CadastrarMedico} />} />
        <Route path="/cadastrar_blog" element={<PrivateRoute element={CadastrarBlog} />} />
        <Route path="/editar_medicos" element={<PrivateRoute element={EditarMedicos} />} />
        <Route path="/editar_blog" element={<PrivateRoute element={EditarBlog} />} />
        <Route path="/editar_medico/:doctorId" element={<PrivateRoute element={AlterarMedicos} />} />
        <Route path="/editar_blog/:blogId" element={<PrivateRoute element={AlterarBlog} />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
