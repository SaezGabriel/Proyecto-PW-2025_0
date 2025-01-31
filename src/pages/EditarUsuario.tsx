interface EditarioUsuarioProps {
    closeModal : () => void
    showModal : boolean;
}



const EditarUsuario = (props : EditarioUsuarioProps) => {
    return (
        <div className={props.showModal == true ? "modal fade show d-block bg-dark bg-opacity-50" : "modal fade"}>
            <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                
                <h5 className="text-center m-4">Editar Usuario</h5>
                
                <div className="modal-body">
            <div className="mb-3 row ps-1 ms-1">
                <label className="col-sm-2 col-form-label ps-3">Nombre</label>
                <div className="col-8 ps-5">
                    <input type="text" 
                            className="form-control" 
                            id="inputNombre" 
                            placeholder="Ingresar nombre" 
                            value="" 
                            required/>
                </div>
            </div>
            <div className="mb-3 row ps-1 ms-2">
                <label className="col-sm-2 col-form-label">Correo</label>
                <div className="col-8 ps-5">
                    <input type="text" 
                            className="form-control" 
                            id="inputCorreo" 
                            placeholder="Ingresar correo" 
                            value="" 
                            required/>
                </div>
            </div>
            <div className="mb-3 row ms-2">
                <label className="col-sm-3 col-form-label ps-3">Contraseña</label>
                <div className="col-7">
                    <input type="password" 
                            className="form-control" 
                            id="inputPassword" 
                            placeholder="Ingresar contraseña" 
                            value="" 
                            required/>
                </div>
            </div>
            <div className="mb-3 row ms-2">
                <label className="col-sm-3 col-form-label ps-3">Rol usuario</label>
                <div className="col-7 mb-3">
                    <select className="form-select" 
                            id="inputGroupSelect01"
                            value=""
                            >
                    <option selected>User</option>
                    <option value="Admin">Admin</option>
                    </select>
                </div>
            </div>
            <div className="row p-4 ms-3">
                <div className="col-6">
                    <button type="button" className="btn btn-secondary w-75" onClick={ () =>  {
                            props.closeModal()
                        } }>Cancelar</button>
                </div>
                <div className="col-6">  
                    <button type="button" 
                            className="btn btn-primary w-75"
                            onClick={ () =>  {
                                props.closeModal()
                            } }
                            >Aceptar</button>
                </div>
            </div>
        </div>
        </div>
        </div>
        </div>
    );
}

export default EditarUsuario