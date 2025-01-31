interface FiltrarRolProps {
  showModal : boolean;
  closeModal : () => void
}


const FiltrarRol = (props : FiltrarRolProps) => {
   

  return <div className={ props.showModal == true ? "modal fade show d-block" : "modal fade"}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Filtrar por rol de usuario</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => {props.closeModal()}}></button>
                        </div>
                        <div className="modal-body">
                            <form id="formu">
                                
                                <select className="form-select" aria-label="Default select example">

                                <option value="1">User</option>
                                <option value="2">Admin</option>
                                
                                </select>
                               
                                <div className="modal-footer">
                                    <input type="submit" className="btn btn-primary" data-bs-dismiss="modal" id="but_agregar" onSubmit={ () => {props.closeModal()}}/>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => {props.closeModal()}} >Cerrar sin guardar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

}

export default FiltrarRol