import { useState } from "react";
import Presupuesto from "./Presupuesto";
import Dashboard from "./Dashboard";

const MainPage=() => {
  const [activeSection, setActiveSection] = useState("dashboard"); // Estado para controlar la sección activa

  // Contenido dinámico que se mostrará en el main content
  const Opciones = () => {
    switch (activeSection) {
      case "dashboard":
        return <Dashboard/>;
      case "gastos":
        return <h1>Gastos</h1>;
      case "presupuestos":
        return <Presupuesto/>
      case "configuracion":
        return <h1>Configuración</h1>;
      case "salir":
        return <h1>Salir</h1>;
      
    }
  };

  return (
    <div className="d-flex vh-100">
      {/* Sidebar */}
      <div className="bg-light border-end" style={{ width: "250px" }}>
        <div className="text-center p-4">
          <img
            src="https://via.placeholder.com/100"
            alt="Perfil"
            className="rounded-circle mb-2"
          />
          <h5>Jessica Straus</h5>
        </div>
        <ul className="list-unstyled ps-0">
          <li>
            <button
              className={`btn w-100 text-start ${
                activeSection === "dashboard" ? "btn-primary text-white" : ""
              }`}
              onClick={() => setActiveSection("dashboard")}
            >
              Dashboard
            </button>
          </li>
          <li>
            <button
              className={`btn w-100 text-start ${
                activeSection === "gastos" ? "btn-primary text-white" : ""
              }`}
              onClick={() => setActiveSection("gastos")}
            >
              Gastos
            </button>
          </li>
          <li>
            <button
              className={`btn w-100 text-start ${
                activeSection === "presupuestos" ? "btn-primary text-white" : ""
              }`}
              onClick={() => setActiveSection("presupuestos")}
            >
              Presupuestos
            </button>
          </li>
          <li>
            <button
              className={`btn w-100 text-start ${
                activeSection === "configuracion" ? "btn-primary text-white" : ""
              }`}
              onClick={() => setActiveSection("configuracion")}
            >
              Configuración
            </button>
          </li>
          <li>
            <button
              className={`btn w-100 text-start ${
                activeSection === "salir" ? "btn-primary text-white" : ""
              }`}
              onClick={() => setActiveSection("salir")}
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

export default MainPage;