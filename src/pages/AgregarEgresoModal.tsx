interface AgregarEgresoModalProps {
    showModal : boolean;
    closeModal : () => void
}

const AgregarEgresoModal = (props : AgregarEgresoModalProps) => {
    return <div className={ props.showModal == true ? "modal fade show d-block" : "modal fade"}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Agregar gasto</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => {props.closeModal()}}></button>
                        </div>
                        <div className="modal-body">
                            <form id="formu">
                                <div className="form-group">
                                    <label className="form-label">Fecha: </label>
                                    <input type="date" className="form-control" id="fecha" required/>
                                </div>
                                
                                    <div className="form-group">
                                    <label className="form-label">Categoria: </label>
                                    <input type="text" className="form-control" id="categoriaText" required/>
                                </div>
                        
                                    <div className="form-group">
                                    <label className="form-label">Descripcion: </label>
                                    <input type="text" className="form-control" id="descripcionText" required/>
                                </div>
                                
                                <div className="form-group">
                                    <label className="form-label">Monto: </label>
                                    <input type="number" className="form-control" id="monto" step="0.01" min="0" placeholder="0.00" required/>
                                </div>
                        
                                <div className="form-check">
                                    <label className="form-label">Recurrente?: </label>
                                    <input type="checkbox" className="checkbox-inline " id="recuBool"/>
                                </div>
                        
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal" id="but_agregar" onClick={() => {props.closeModal()}}>Guardar</button>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => {props.closeModal()}} >Cerrar sin guardar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
}

export default AgregarEgresoModal