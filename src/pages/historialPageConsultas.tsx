import { useState } from "react";
import HistorialLista from "./historialLista";  
import FormularioHistorial from "./formularioHistorial";  
import HistorialFooter from "./formularioFotter"; 

export interface Acceso {
    usuario: string;
    fecha: string;
    accion: string;
}

const HistorialPage = () => {
    const [historialAccesos, setHistorialAccesos] = useState<Acceso[]>([]);

    const agregarAcceso = (nuevoAcceso: Acceso) => {
        setHistorialAccesos([...historialAccesos, nuevoAcceso]);
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Historial de Acceso</h2>
            
            {/* Formulario para agregar accesos */}
            <FormularioHistorial onAgregarAcceso={agregarAcceso} />

            {/* Lista de accesos */}
            <HistorialLista historial={historialAccesos} />

            {/* Footer */}
            <HistorialFooter />
        </div>
    );
};

export default HistorialPage;