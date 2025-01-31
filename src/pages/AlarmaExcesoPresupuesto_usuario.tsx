interface AlarmaExcesoPresupuesto_usuario {
    showModal : boolean;
    closeModal : () => void
}

const AlarmaPresupuesto = (props : AlarmaExcesoPresupuesto_usuario) => {
    return <div className={ props.showModal == true ? "modal fade show d-block" : "modal fade"}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">¡Alerta!</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => {props.closeModal()}}></button>
                        </div>
                        <div className="modal-body">
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => {props.closeModal()}} >Aceptar</button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
}

export default AlarmaPresupuesto