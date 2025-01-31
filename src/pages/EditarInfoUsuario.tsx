interface EditarInfoUsuarioProps {
    showModal : boolean;
    closeModal : () => void
}

const EditarInfoUsuario = (props : EditarInfoUsuarioProps) => {
    return (
        <div className={ props.showModal == true ? "modal fade show d-block bg-dark bg-opacity-50" : "modal fade" } >
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                
                <h5 className="text-center mt-4">Editar informacion de usuario</h5>
                
                <div className="modal-body">
                <div className="mb-3 row ps-1">
            <label className="col-sm-2 col-form-label ps-3">Nombre</label>
            <div className="col-8 ps-5">
              <input type="text" className="form-control ms-1" id="inputNombre" placeholder="Jessica" value="" required/>
            </div>
        </div>
        <div className="mb-3 row ps-1">
            <label className="col-sm-2 col-form-label ps-3">Correo</label>
            <div className="col-8 ps-5">
              <input type="text" className="form-control ms-1" id="inputCorreo" placeholder="jess@taxes.com" value="" required/>
            </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-3 col-form-label ps-3 ms-1">Contraseña</label>
          <div className="col-7">
            <input type="password" className="form-control " id="inputPassword" placeholder="12345" value="" required/>
          </div>
        </div>
        <div className="row p-4">
          <div className="col-6">
            <button type="button" className="btn btn-secondary w-75 " onClick={ () =>  {
                            props.closeModal()
                        } }>Cancelar</button>
          </div>
          <div className="col-6">  
            <button type="button" className="btn btn-primary w-75" onClick={ () =>  {
                            props.closeModal()
                        } }>Aceptar</button>
          </div>
        </div>
                </div>
        </div>

                </div>
            </div>)
}

export default EditarInfoUsuario


