interface FiltrarRolProps {
  showModal : boolean;
  closeModal : () => void
}


const FiltrarRol = (props : FiltrarRolProps) => {
   

  
             return <div className={ props.showModal == true ? "modal fade show d-block" : "modal fade"}>
             <div className="modal-dialog modal-dialog"style={{ maxWidth: '400px' }}>
                <div className="modal-content" style={{ borderRadius: '20px' }}> {/* Bordes redondeados */}
                    <div className="modal-header">
                        <h5 className="modal-title d-flex justify-content-center w-100">
                        Filtrar por rol de usuario
                         </h5>
                         <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => {props.closeModal()}}></button>
                    </div>
                     <div className="modal-body">
                         <form id="formu">
                             
                             <div className="row mb-4 mt-3 justify-content-center">
                                <div className="col-md-2 text-end">
                                    <label className=" fw-bold fs-5">Rol</label>
                                </div>
                                <div className="col-md-6">
                                <select id="rol" name="rol" className="form-select">
                                            <option value="admin">Admin</option>
                                            <option value="user">User</option>
                                </select>
                                </div>
                             </div>             
                             <div className="modal-footer justify-content-center">
                                 <button type="button" className="btn btn-primary me-4" data-bs-dismiss="modal" id="but_agregar" onClick={ () => {props.closeModal()}}>Cancelar</button>
                                 <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => {props.closeModal()}} >Aceptar</button>
                            </div>
                        </form>
                    </div>
                </div>
             </div>
         </div>

}

export default FiltrarRol