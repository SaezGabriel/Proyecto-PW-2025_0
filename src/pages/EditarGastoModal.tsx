import { elementosTabla } from "./PaginaEgresos";

interface EditarEgresoModalProps {
    showModal : boolean;
    closeModal : () => void;
    elemento : elementosTabla;
}


const EditarEgresoModal = (props : EditarEgresoModalProps) => {
    const elemAct = props.elemento
    let nuevaFecha = elemAct.fecha
    let nuevoMonto = elemAct.monto
    const recu = elemAct.recursivo
    
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
                                        <input type="date" className="form-control" id="fecha" value={nuevaFecha} required />
                                    </div>
                                </div>
                                <br />
                                <div className="form-group row position-relative">
                                    <label className="col-sm-3 col-form-label position-absolute start-0">Categoría</label>
                                    <div className="col-sm-9 offset-sm-3">
                                        <select className="form-select" required>
                                            {elemAct.Categoria.nombre == "Ocio" ? <option value="1" selected >Ocio</option> : <option value="1" >Ocio</option>}
                                            {elemAct.Categoria.nombre == "Servicios" ? <option value="2" selected >Servicios</option> : <option value="2" >Servicios</option>}
                                            {elemAct.Categoria.nombre == "Alimentación" ? <option value="3" selected >Alimentación</option> : <option value="3" >Alimentación</option>}
                                        </select>
                                    </div>
                                </div>
                                <br />
                                <div className="form-group row position-relative">
                                    <label className="col-sm-3 col-form-label position-absolute start-0">Descripción</label>
                                    <div className="col-sm-9 offset-sm-3">
                                        <input type="text" className="form-control" id="descripcionText" value={elemAct.descripcion} required />
                                    </div>
                                </div>
                                <br />
                                <div className="form-group row position-relative">
                                    <label className="col-sm-3 col-form-label position-absolute start-0">Monto</label>
                                    <div className="col-sm-9 offset-sm-3">
                                        <input type="number" className="form-control" id="monto" step="0.01" min="0" placeholder="0.00" value={nuevoMonto} required />
                                    </div>
                                </div>
                                <br />
                                <div className="form-group row position-relative align-items-center">
                                    <label className="col-sm-3 col-form-label position-absolute start-0">Recurrente</label>
                                    <div className="col-sm-9 offset-sm-3">
                                        {recu ? <input type="checkbox" className="form-check-input" id="recuBool" checked/>  : <input type="checkbox" className="form-check-input" id="recuBool"/> }
                                    </div>
                                </div>
                                <br />
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => {props.closeModal()}}>Cancelar</button>
                                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal" id="but_editar" onClick={() => {props.closeModal()}}>Aceptar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div></>
}

export default EditarEgresoModal