import { useEffect, useState } from "react";
import { elementosTabla , elementoAgregar} from "./PaginaEgresos";

interface EditarEgresoModalProps {
    showModal : boolean;
    closeModal : () => void;
    elemento : elementosTabla;
    handleEditarEgreso : (elem : elementoAgregar , id : number) => void;
}

const EditarEgresoModal = (props : EditarEgresoModalProps) => {
    //const [elemAct, setElemAct] = useState<elementosTabla>(props.elemento)
    const UsuarioId = 1

    const [id, setId] = useState<number>(props.elemento.id)
    const [monto, setMonto] = useState<number>(props.elemento.monto)
    const [fechaString, setFechaString] = useState<string>(props.elemento.fecha)
    // Date es YYYY MM DD , el mes debe ser -1 , osea, 0 es enero, 1 es febrero , etc....
    const [fecha, setFecha] = useState<Date>(new Date(parseInt(props.elemento.fecha.split("-",3)[0]),parseInt(props.elemento.fecha.split("-",3)[1]) - 1, parseInt(props.elemento.fecha.split("-",3)[2])))
    const [descripcion, setDescripcion] = useState<string>(props.elemento.descripcion)
    const [recursivo, setRecursivo] = useState<boolean>(props.elemento.recursivo)
    const [categoriaId, setCategoriaId] = useState<number>(props.elemento.categoriaId)

    useEffect(()=> {
        //setElemAct(props.elemento)
        setId(props.elemento.id)
        setMonto(props.elemento.monto)
        setFechaString(props.elemento.fecha)
        setFecha(new Date(parseInt(props.elemento.fecha.split("-",3)[0]),parseInt(props.elemento.fecha.split("-",3)[1]) - 1, parseInt(props.elemento.fecha.split("-",3)[2])))
        setDescripcion(props.elemento.descripcion)
        setRecursivo(props.elemento.recursivo)
        setCategoriaId(props.elemento.categoriaId)
     },[props.elemento])

    return <>{props.showModal && <div className="modal-backdrop fade show"></div>}
            <div className={ props.showModal == true ? "modal fade show d-block" : "modal fade"} tabIndex={-1}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title w-100 text-center" id="exampleModalLabel">Editar gasto</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={() => {props.closeModal()}}></button>
                        </div>
                        <div className="modal-body">
                            <form id="formu">
                                <div className="form-group row position-relative">
                                    <label className="col-sm-3 col-form-label position-absolute start-0">Fecha</label>
                                    <div className="col-sm-9 offset-sm-3">
                                        <input type="date" className="form-control" id="fecha" value={fechaString} onChange={(e : React.ChangeEvent<HTMLInputElement>) => {
                                            const valores = e.target.value.split("-",3)
                                            console.log("valores: " + valores)
                                            const dateFec = new Date(parseInt(valores[0]), parseInt(valores[1]) - 1 , parseInt(valores[2]))
                                            setFecha(dateFec)
                                            console.log(dateFec)
                                            setFechaString(valores[0] + "-"+ valores[1]+"-"+ valores[2])
                                        }} required />
                                    </div>
                                </div>
                                <br />
                                <div className="form-group row position-relative">
                                    <label className="col-sm-3 col-form-label position-absolute start-0">Categoría</label>
                                    <div className="col-sm-9 offset-sm-3">
                                        <select className="form-select" onChange={(e : React.ChangeEvent<HTMLSelectElement>) => {
                                            setCategoriaId(parseInt(e.target.value))
                                        }} required>
                                            {categoriaId == 1 ? <option value="1" selected >Servicios</option> : <option value="1" >Servicios</option>}
                                            {categoriaId == 2 ? <option value="2" selected >Alimentación</option> : <option value="2" >Alimentación</option>}
                                            {categoriaId == 3 ? <option value="3" selected >Ocio</option> : <option value="3" >Ocio</option>}
                                        </select>
                                    </div>
                                </div>
                                <br />
                                <div className="form-group row position-relative">
                                    <label className="col-sm-3 col-form-label position-absolute start-0">Descripción</label>
                                    <div className="col-sm-9 offset-sm-3">
                                        <input type="text" className="form-control" id="descripcionText" value={descripcion} onChange={(e : React.ChangeEvent<HTMLInputElement>) => {
                                            setDescripcion(e.target.value)
                                        }} required />
                                    </div>
                                </div>
                                <br />
                                <div className="form-group row position-relative">
                                    <label className="col-sm-3 col-form-label position-absolute start-0">Monto</label>
                                    <div className="col-sm-9 offset-sm-3">
                                        <input type="number" className="form-control" id="monto" step="0.01" min="0.00" placeholder="0.00" value={monto} onChange={(e : React.ChangeEvent<HTMLInputElement>) => {
                                            setMonto(parseFloat(e.target.value))
                                        }} required />
                                    </div>
                                </div>
                                <br />
                                <div className="form-group row position-relative align-items-center">
                                    <label className="col-sm-3 col-form-label position-absolute start-0">Recurrente</label>
                                    <div className="col-sm-9 offset-sm-3" >
                                        {recursivo ? <input type="checkbox" className="form-check-input" id="recuBool" onChange={(e : React.ChangeEvent<HTMLInputElement>) => {
                                            console.log(e.currentTarget.checked)
                                            setRecursivo(e.currentTarget.checked)
                                        }} checked/>  : <input type="checkbox" className="form-check-input" id="recuBool" onChange={(e : React.ChangeEvent<HTMLInputElement>) => {
                                            console.log(e.currentTarget.checked)
                                            setRecursivo(e.currentTarget.checked)
                                        }} /> }
                                    </div>
                                </div>
                                <br />
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => {props.closeModal()}}>Cancelar</button>
                                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal" id="but_editar" onClick={() => {
                                        if(monto == 0.00 || fechaString == "" || descripcion == "" || categoriaId == 0){
                                            return //Falta llenar algun dato, no procesar.
                                        }else{
                                            console.log("nuevoMonto: ", monto)
                                            console.log("Id a editar: ", id)
                                            props.handleEditarEgreso(
                                                {
                                                    UsuarioId: UsuarioId, 
                                                    monto : monto, 
                                                    fecha : fecha, 
                                                    descripcion : descripcion, 
                                                    recursivo : recursivo, 
                                                    categoriaId : categoriaId
                                                } , id)
                                        }
                                    }}>Aceptar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div></>
}

export default EditarEgresoModal