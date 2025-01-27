import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./pages/LoginPage";
import NuevaContraseña from "./pages/Nueva_contraseña";
import MainPage from './pages/MainPage';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/nueva-contraseña" element={<NuevaContraseña />} />
        <Route path="/mainpage" element={<MainPage />} />
      </Routes>
    </Router>
  </StrictMode>,
)
