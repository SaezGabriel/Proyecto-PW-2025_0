import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./pages/LoginPage";
import NuevaContraseña from "./pages/Nueva_contraseña";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import MainPage_usuario from './pages/MainPage_usuario';
import Registrar_nuevo from './pages/Registrar_nuevo';
import MainPage_admin from './pages/MainPage_admin';
import Confirmacion_correo from './pages/Confirmacion_correo';




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/nueva-contraseña" element={<NuevaContraseña />} />
        <Route path="/confirmacion-correo" element={<Confirmacion_correo />} />
        <Route path="/registrar-nuevo" element={<Registrar_nuevo />} />
        <Route path="/mainpage_usuario" element={<MainPage_usuario />} />
        <Route path="/mainpage_admin" element={<MainPage_admin />} />
      </Routes>
    </Router>
  </StrictMode>,
)
/*hh*/
