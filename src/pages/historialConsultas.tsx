import { Acceso } from "./historialPage";

interface HistorialListaProps {
    historial: Acceso[];
}

const HistorialLista = ({ historial }: HistorialListaProps) => {
    return (
        <section className="mt-4">
            <table className="table table-hover table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th>Usuario</th>
                        <th>Fecha</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {historial.length > 0 ? (
                        historial.map((item, index) => (
                            <tr key={index}>
                                <td>{item.usuario}</td>
                                <td>{item.fecha}</td>
                                <td>{item.accion}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={3} className="text-center">No hay accesos registrados.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </section>
    );
};

export default HistorialLista;