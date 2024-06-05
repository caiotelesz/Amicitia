import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./pages/home";
import Contato from "./pages/contato";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
