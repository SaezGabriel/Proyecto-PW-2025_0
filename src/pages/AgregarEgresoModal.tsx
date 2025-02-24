import { useState } from "react";

const URL_BACKEND = import.meta.env.VITE_URL_BACKEND || "http://localhost:5000"

interface elementoAgregar {
    UsuarioId : number;
    monto : number;
    fecha : Date;
    descripcion : string;
    recursivo : boolean;
    categoriaId : number;
}

interface AgregarEgresoModalProps {
    showModal : boolean;
    closeModal : () => void
}

const AgregarEgresoModal = (props : AgregarEgresoModalProps) => {
    
    const UsuarioId = 1

    const [monto, setMonto] = useState<number>(0.00)
    // Date es YYYY MM DD , el mes debe ser -1 , osea, 0 es enero, 1 es febrero , etc....
    const [fecha, setFecha] = useState<Date>( new Date(2000,0,1))
    const [descripcion, setDescripcion] = useState<string>("")
    const [recursivo, setRecursivo] = useState<boolean>(false)
    const [categoriaId, setCategoriaId] = useState<number>(0)

    const [nuevoEgreso, setNuevoEgreso] = useState<elementoAgregar>({UsuarioId: UsuarioId, monto : monto, fecha : fecha, descripcion : descripcion,  recursivo : recursivo, categoriaId : categoriaId})

    const httpGuardarEgreso = async (nuevoEgreso : elementoAgregar) => {
        const url = URL_BACKEND + "/egresos"
        const resp = await fetch(url, {
            method : "POST",
            body : JSON.stringify({
                UsuarioId : UsuarioId,
                monto : nuevoEgreso.monto,
                fecha : nuevoEgreso.fecha,
                descripcion : nuevoEgreso.descripcion,
                recurrente : nuevoEgreso.recursivo,
                categoriaId : nuevoEgreso.categoriaId
            }),
            headers : {
                "Content-Type": "application/json",
            }
        })
        const data = await resp.json()
        if (data.msg == "") {
            props.closeModal()
        }
    }

    const handleAgregarEgreso = async (monto : number, fecha : Date, descripcion : string, recursivo : boolean, categoriaId : number) => {
        await setNuevoEgreso({UsuarioId: UsuarioId, monto : monto, fecha : fecha, descripcion : descripcion,  recursivo : recursivo, categoriaId : categoriaId})
        await httpGuardarEgreso(nuevoEgreso)
    }

    return <>{props.showModal && <div className="modal-backdrop fade show"></div>}
            <div className={ props.showModal == true ? "modal fade show d-block" : "modal fade"} tabIndex={-1}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title w-100 text-center" id="exampleModalLabel">Agregar gasto</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={() => {props.closeModal()}}></button>
                        </div>
                        <div className="modal-body">
                            <form id="formu">
                                <div className="form-group row position-relative">
                                    <label className="col-sm-3 col-form-label position-absolute start-0">Fecha</label>
                                    <div className="col-sm-9 offset-sm-3">
                                        <input type="date" className="form-control" id="fecha" value={fecha.toLocaleString()} onChange={(e : React.ChangeEvent<HTMLInputElement>) => {
                                            const valores = e.target.value.split("-",3)
                                            setFecha(new Date(parseInt(valores[0]), parseInt(valores[1]) - 1 , parseInt(valores[2])))
                                        }} required />
                                    </div>
                                </div>
                                <br />
                                <div className="form-group row position-relative">
                                    <label className="col-sm-3 col-form-label position-absolute start-0">Categoría</label>
                                    <div className="col-sm-9 offset-sm-3">
                                        <select className="form-select" value={categoriaId} onChange={(e : React.ChangeEvent<HTMLSelectElement>) => {
                                            setCategoriaId(parseInt(e.target.value))
                                        }} required>
                                            <option value="1">Ocio</option>
                                            <option value="2">Servicios</option>
                                            <option value="3">Alimentación</option>
                                        </select>
                                    </div>
                                </div>
                                <br />
                                <div className="form-group row position-relative">
                                    <label className="col-sm-3 col-form-label position-absolute start-0">Descripción</label>
                                    <div className="col-sm-9 offset-sm-3">
                                        <input type="text" className="form-control input-lg" id="descripcionText" value={descripcion} onChange={(e : React.ChangeEvent<HTMLInputElement>) => {
                                            setDescripcion(e.target.value)
                                        }} required />
                                    </div>
                                </div>
                                <br />
                                <div className="form-group row position-relative">
                                    <label className="col-sm-3 col-form-label position-absolute start-0">Monto</label>
                                    <div className="col-sm-9 offset-sm-3">
                                        <input type="number" className="form-control" id="monto" step="0.01" min="0" placeholder="0.00" value={monto} onChange={(e : React.ChangeEvent<HTMLInputElement>) => {
                                            setMonto(parseFloat(e.target.value))
                                        }} required />
                                    </div>
                                </div>
                                <br />
                                <div className="form-group row position-relative align-items-center">
                                    <label className="col-sm-3 col-form-label position-absolute start-0">Recurrente</label>
                                    <div className="col-sm-9 offset-sm-3">
                                        <input type="checkbox" className="form-check-input" id="recuBool" onChange={(e : React.ChangeEvent<HTMLInputElement>) => {
                                            setRecursivo(e.currentTarget.checked)
                                        }} />
                                    </div>
                                </div>
                                <br />
                                <div className="modal-footer d-flex justify-content-center gap-2">
                                    <button type="button" className="btn btn-secondary w-25" data-bs-dismiss="modal" id="but_agregar" onClick={() => {props.closeModal()}}>Cancelar</button>
                                    <button type="button" className="btn btn-primary w-25" data-bs-dismiss="modal" onClick={() => {handleAgregarEgreso(monto, fecha, descripcion, recursivo, categoriaId)}}>Aceptar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div></>
}

export default AgregarEgresoModal
