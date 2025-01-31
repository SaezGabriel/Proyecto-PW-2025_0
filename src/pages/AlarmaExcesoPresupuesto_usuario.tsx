interface AlarmaExcesoPresupuesto_usuario {
    showModal : boolean;
    closeModal : () => void
}

const AlarmaPresupuesto = (props : AlarmaExcesoPresupuesto_usuario) => {
    return <div className={ props.showModal == true ? "modal fade show d-block bg-dark bg-opacity-50" : "modal fade"}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                            <h5 className="text-center m-4" id="exampleModalLabel">¡Alerta!</h5>
                        <div className="modal-body">
                            <div className="text-justify mb-5 h5 fs-5 m-3 ms-5 ps-4">
                                Acabas de exeder el presupuesto de servicios
                            </div>
                            <div className="d-flex justify-content-center align-items-center mb-3">  
                                <button type="button" className="btn btn-primary col-4 text-center" onClick={ () =>  {
                                props.closeModal()
                                } }>Aceptar</button>
                            </div>
                    
                        </div>
                    </div>
                </div>
            </div>
}

export default AlarmaPresupuesto

