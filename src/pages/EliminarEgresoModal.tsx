interface EliminarEgresoModalProps {
    showModal : boolean;
    closeModal : () => void
}

const EliminarEgresoModal = (props : EliminarEgresoModalProps) => {
    return <>{props.showModal && <div className="modal-backdrop fade show"></div>}
                <div className={props.showModal ? "modal fade show d-block" : "modal fade"} tabIndex={-1}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title w-100 text-center">Aviso!</h5>
                                <button type="button" className="btn-close" onClick={props.closeModal}></button>
                            </div>
                            <div className="modal-body">
                                <p className="text-center">¿Está seguro que desea eliminar este registro?</p>
                            </div>
                            <div className="modal-footer d-flex justify-content-center gap-2">
                                <button type="button" className="btn btn-secondary w-25" onClick={props.closeModal}>No</button>
                                <button type="button" className="btn btn-primary w-25" id="but_eliminar" onClick={props.closeModal}>Sí</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
}

export default EliminarEgresoModal