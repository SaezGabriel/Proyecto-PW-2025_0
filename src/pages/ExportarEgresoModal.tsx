interface ExportarEgresoModalProps {
    showModal : boolean;
    closeModal : () => void;
    exportarLista_csv : () => void;
}

const ExportarEgresoModal = (props : ExportarEgresoModalProps) => {
    return <div className={ props.showModal == true ? "modal fade show d-block" : "modal fade"}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Exportar Gastos</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => {props.closeModal()}}></button>
                        </div>
                        <div className="modal-body">
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => {props.exportarLista_csv()}} >CSV</button>
                                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => {props.closeModal()}} >PDF</button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
}

export default ExportarEgresoModal