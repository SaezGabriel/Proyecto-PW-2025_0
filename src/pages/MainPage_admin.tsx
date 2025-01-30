import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import Usuarios_admin from "./Usuarios_admin";
import GraficaUsuarios from "./Grafica_admin";
// Registrar los componentes necesarios de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const MainPage_admin=() => {

  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("dashboard"); // Estado para controlar la sección activa



  // Contenido dinámico que se mostrará en el main content
  const Opciones = () => {
    switch (activeSection) {
      case "Grafica" :
        return <GraficaUsuarios/>;
      case "Usuarios":
        return <Usuarios_admin/>;
      case "historial":
        return <h1>historial</h1>;
      case "configuracion":
        return <h1>Configuracion</h1>;
      case "salir":
        return <h1>Salir</h1>;
      
    }
  };

  return (
    <div className="d-flex vh-100">
      {/* Sidebar */}
      <div className="bg-light border-end" style={{ width: "250px" }}>
        <div className="text-center p-4" >
          <img
            src="https://static.wikia.nocookie.net/ssb/images/8/83/R.O.B._-_Super_Smash_Bros._Brawl.png" className="usuario-foto" alt="foto-del-usuario"
            style={{ width: "125px", height: "125px" }}/>
          <h5>Administrador</h5>
        </div>
        <ul className="list-unstyled ps-0">
          <li>
            <button
              className={`btn w-100 text-start ${
                activeSection === "Usuarios" ? "btn-white text-primary" : ""
              }`}
              onClick={() => setActiveSection("Usuarios")}
            >
              Usuarios
            </button>
          </li>
          <li>
            <button
              className={`btn w-100 text-start ${
                activeSection === "Grafica" ? "btn-white text-primary" : ""
              }`}
              onClick={() => setActiveSection("Grafica")}
            >
              Grafica
            </button>
          </li>
          <li>
            <button
              className={`btn w-100 text-start ${
                activeSection === "historial" ? "btn-white text-primary" : ""
              }`}
              onClick={() => setActiveSection("historial")}
            >
              historial
            </button>
          </li>
          <li>
            <button
              className={`btn w-100 text-start ${
                activeSection === "configuracion" ? "btn-white text-primary" : ""
              }`}
              onClick={() => setActiveSection("configuracion")}
            >
              Configuración
            </button>
          </li>
          <li>
            <button
              className={`btn w-100 text-start ${
                activeSection === "salir" ? "btn-white text-primary" : ""
              }`}
              onClick={() => navigate("/")}
            >
              Salir
            </button>
          </li>
        </ul>
      </div>
      <div className="flex-grow-1 p-4 bg-light">
        {Opciones()}
      </div>
    </div>
  );
}

export default MainPage_admin;