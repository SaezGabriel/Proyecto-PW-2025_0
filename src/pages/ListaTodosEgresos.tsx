import { TODO } from "./Todopage";

interface ListaTODOProps {
    lista: TODO[];
    onEliminarTODO: (pos: number) => void;
    onAgregarTODO?: (todo: TODO) => void;
}

const ListaTODOS = (props: ListaTODOProps) => {
    return (
        <section className="mt-4">
            <table className="table table-hover table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th>Fecha</th>
                        <th>Categoría</th>
                        <th>Descripción</th>
                        <th className="text-end">Monto</th>
                        <th>Recurrente</th>
                        <th className="text-center">Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {props.lista.map((item: TODO, index: number) => (
                        <tr key={index}>
                            <td>{item.fecha}</td>
                            <td>{item.categoria}</td>
                            <td>{item.descripcion}</td>
                            <td className="text-end fw-bold">${item.monto.toFixed(2)}</td>
                            <td className="text-center">{item.recurrente ? "✓" : ""}</td>
                            <td className="text-center">
                                <button className="btn btn-outline-danger btn-sm me-2" onClick={() => props.onEliminarTODO(index)}>
                                    ✖
                                </button>
                                {props.onAgregarTODO && (
                                    <button className="btn btn-outline-success btn-sm" onClick={() => props.onAgregarTODO?.(item)}>
                                        ➕
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};

export default ListaTODOS;
