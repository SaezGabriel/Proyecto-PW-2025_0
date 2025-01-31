import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./pages/LoginPage";
import NuevaContraseña from "./pages/Nueva_contraseña";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import MainPage_usuario from './pages/MainPage_usuario';
import MainPage_admin from './pages/MainPage_admin';
import Registrar_nuevo from './pages/Registrar_nuevo';




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/registrar-nuevo" element={<Registrar_nuevo />} />
        <Route path="/nueva-contraseña" element={<NuevaContraseña />} />
        <Route path="/mainpage_usuario" element={<MainPage_usuario />} />
        <Route path="/mainpage_admin" element={<MainPage_admin />} />
      </Routes>
    </Router>
  </StrictMode>,
)
