interface FiltrarEgresoModalProps {
    showModal : boolean;
    closeModal : () => void
}

const FiltrarEgresoModal = (props : FiltrarEgresoModalProps) => {
    return <>{props.showModal && <div className="modal-backdrop fade show"></div>}
            <div className={ props.showModal == true ? "modal fade show d-block" : "modal fade"} tabIndex={-1}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title w-100 text-center" id="exampleModalLabel">Filtrar gastos</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={() => {props.closeModal()}}></button>
                        </div>
                        <div className="modal-body">
                            <form id="formu">
                                <div className="form-group row position-relative">
                                    <label className="col-sm-3 col-form-label position-absolute start-0">Desde</label>
                                    <div className="col-sm-9 offset-sm-3">
                                        <input type="date" className="form-control" id="fecha" required />
                                    </div>
                                </div>
                                <br />
                                <div className="form-group row position-relative">
                                    <label className="col-sm-3 col-form-label position-absolute start-0">Categoría</label>
                                    <div className="col-sm-9 offset-sm-3">
                                        <select className="form-select" required>
                                            <option value="1">Ocio</option>
                                            <option value="2">Servicios</option>
                                            <option value="3">Alimentación</option>
                                        </select>
                                    </div>
                                </div>
                                <br />
                                <div className="form-group row position-relative">
                                    <label className="col-sm-3 col-form-label position-absolute start-0">Monto</label>
                                    <div className="col-sm-3 offset-sm-3">
                                        <input type="number" className="form-control" id="monto" step="0.01" min="0" placeholder="0.00" required />
                                    </div>
                                    <div className="col-sm-3 text-center justify-content-center">
                                        a
                                    </div>
                                    <div className="col-sm-3">
                                        <input type="number" className="form-control" id="monto" step="0.01" min="0" placeholder="0.00" required />
                                    </div>
                                </div>
                                <br />
                                <div className="form-group row position-relative align-items-center">
                                    <label className="col-sm-3 col-form-label position-absolute start-0">Recurrente</label>
                                    <div className="col-sm-9 offset-sm-3">
                                        <input type="checkbox" className="form-check-input" id="recuBool" />
                                    </div>
                                </div>
                                <br />
                                <div className="modal-footer d-flex justify-content-center gap-2">
                                    <button type="button" className="btn btn-secondary w-25" data-bs-dismiss="modal" onClick={() => {props.closeModal()}} >Cancelar</button>
                                    <button type="button" className="btn btn-primary w-25" data-bs-dismiss="modal" id="but_filtrar" onClick={() => {props.closeModal()}}>Filtrar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div></>
}

export default FiltrarEgresoModal
