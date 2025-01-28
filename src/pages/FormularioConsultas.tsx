import { useState } from "react";
import { Acceso } from "./historialPage";

interface FormularioHistorialProps {
    onAgregarAcceso: (nuevoAcceso: Acceso) => void;
}

const FormularioHistorial = ({ onAgregarAcceso }: FormularioHistorialProps) => {
    const [usuario, setUsuario] = useState<string>("");
    const [accion, setAccion] = useState<string>("Inicio de sesión");

    const registrarAcceso = () => {
        if (!usuario) return;

        const nuevoAcceso: Acceso = {
            usuario,
            fecha: new Date().toLocaleString(),
            accion
        };

        onAgregarAcceso(nuevoAcceso);
        setUsuario("");
    };

    return (
        <div className="mb-4">
            <input 
                type="text" 
                className="form-control mb-2" 
                placeholder="Nombre del usuario" 
                value={usuario} 
                onChange={(e) => setUsuario(e.target.value)} 
            />

            <select 
                className="form-select mb-2" 
                value={accion} 
                onChange={(e) => setAccion(e.target.value)}
            >
                <option value="Inicio de sesión">Inicio de sesión</option>
                <option value="Cierre de sesión">Cierre de sesión</option>
                <option value="Acción en la app">Acción en la app</option>
            </select>

            <button className="btn btn-primary" onClick={registrarAcceso}>
                Registrar Acceso
            </button>
        </div>
    );
};
