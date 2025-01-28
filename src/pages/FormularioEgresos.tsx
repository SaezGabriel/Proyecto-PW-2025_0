import { TODO } from "./Todopage";
import { useState } from "react";

interface FormularioTODOProps {
    onAgregarTODO: (nuevoTodo: { fecha: string; categoria: string; descripcion: string; monto: number; recurrente: boolean }) => void;
    gastosRecurrentes: TODO[];
}

const FormularioTODO = (props: FormularioTODOProps) => {
    const [fecha, setFecha] = useState<string>("");
    const [categoria, setCategoria] = useState<string>("");
    const [descripcion, setDescripcion] = useState<string>("");
    const [monto, setMonto] = useState<number>(0);
    const [recurrente, setRecurrente] = useState<boolean>(false);
    const [gastoSeleccionado, setGastoSeleccionado] = useState<string>("");

    const cargarGastoRecurrente = (descripcion: string) => {
        const gasto = props.gastosRecurrentes.find(g => g.descripcion === descripcion);
        if (gasto) {
            setFecha(gasto.fecha);
            setCategoria(gasto.categoria);
            setDescripcion(gasto.descripcion);
            setMonto(gasto.monto);
            setRecurrente(true);
        }
    };

    const agregarTarea = () => {
        if (!fecha || !categoria || !descripcion || monto <= 0) return;

        props.onAgregarTODO({ fecha, categoria, descripcion, monto, recurrente });

        setFecha("");
        setCategoria("");
        setDescripcion("");
        setMonto(0);
        setRecurrente(false);
    };

    return (
        <section className="row">
            <div className="col-md-2">
                <input className="form-control" type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
            </div>

            <div className="col-md-2">
                <input className="form-control" type="text" placeholder="Categoría" value={categoria} onChange={(e) => setCategoria(e.target.value)} />
            </div>

            <div className="col-md-3">
                <input className="form-control" type="text" placeholder="Descripción" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
            </div>

            <div className="col-md-1">
                <input className="form-control" type="number" placeholder="Monto" value={monto} onChange={(e) => setMonto(parseFloat(e.target.value))} />
            </div>

            <div className="col-md-2">
                <button className="btn btn-primary" onClick={agregarTarea}>Agregar</button>
                <button className={`btn ${recurrente ? "btn-success" : "btn-secondary"} ms-2`} onClick={() => setRecurrente(!recurrente)}>
                    {recurrente ? "Recurrente ✓" : "Recurrente"}
                </button>
            </div>
        </section>
    );
};

export default FormularioTODO;