import { useState } from "react";

interface FormularioUsuarioProps {
    closeModal : () => void
    showModal : boolean;
    GuardarUsuario : (nombreUsuario : string, correo : string, contraseña : string, rol : number) => void
}



const RegistroUsuario = (props : FormularioUsuarioProps) => {

    const [nombreUsuario, setNombreUsuario] = useState<string>("")
    const [correo, setCorreo] = useState<string>("")
    const [contraseña, setContraseña] = useState<string>("")
    const [rol, setRol] = useState<number>(0)

    const nombreUsuarioChangeHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
        setNombreUsuario(e.target.value)
    }

    const correoChangeHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
        setCorreo(e.target.value)
    }

    const contraseñaChangeHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
        setContraseña(e.target.value)
    }

    const rolChangeHandler = (e : React.ChangeEvent<HTMLSelectElement>) => {
        setRol(parseInt(e.target.value))
    }
    return (
        <div className={props.showModal == true ? "modal fade show d-block bg-dark bg-opacity-50" : "modal fade"}>
            <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                
                <h5 className="text-center m-4">Agregar Usuario</h5>
                
                <div className="modal-body">
            <div className="mb-3 row ms-2">
                <label className="col-sm-2 col-form-label ps-3">Nombre</label>
                <div className="col-8 ps-5">
                    <input type="text" 
                            className="form-control" 
                            id="inputNombre" 
                            placeholder="Ingresar nombre" 
                            value={nombreUsuario} 
                            onChange={nombreUsuarioChangeHandler}
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
                            value={correo} 
                            onChange={correoChangeHandler}
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
                            value={contraseña}
                            onChange={contraseñaChangeHandler} 
                            required/>
                </div>
            </div>
            <div className="mb-3 row ms-2">
                <label className="col-sm-3 col-form-label ps-3">Rol usuario</label>
                <div className="col-7 mb-3">
                    <select className="form-select" 
                            id="rol"
                            value={rol}
                            onChange={rolChangeHandler}
                            >
                    <option selected value={0}>User</option>
                    <option value={1}>Admin</option>
                    </select>
                </div>
            </div>
            <div className="row p-4 ms-4">
                <div className="col-6">
                    <button type="button" className="btn btn-secondary w-75" onClick={ () =>  {
                            props.closeModal()
                        } }>Cancelar</button>
                </div>
                <div className="col-6">  
                    <button type="button" 
                            className="btn btn-primary w-75"
                            onClick={ () =>  {
                                props.GuardarUsuario(nombreUsuario, correo, contraseña,rol)
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

    export default RegistroUsuario
