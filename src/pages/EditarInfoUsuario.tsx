import { Usuarios } from "./Tabla_usuarios_admin";
import { useState } from "react";

interface EditarInfoUsuarioProps {
    showModal : boolean;
    closeModal : () => void
    Usuario : Usuarios | undefined
    EditarUsuario : (id:number,nombreUsuario : string, correo : string, contraseña : string) => void
  }


const EditarInfoUsuario = (props : EditarInfoUsuarioProps) => {
    
    const [nombreUsuario, setNombreUsuario] = useState<string>("")
    const [correo, setCorreo] = useState<string>("")
    const [contraseña, setContraseña] = useState<string>("")
       
    const nombreUsuarioChangeHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
        setNombreUsuario(e.target.value)
    }
       
    const correoChangeHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
        setCorreo(e.target.value)
    }
       
    const contraseñaChangeHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
        setContraseña(e.target.value)
    } 

    return (
        <div className={ props.showModal == true ? "modal fade show d-block bg-dark bg-opacity-50" : "modal fade" } >
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                
                <h5 className="text-center mt-4">Editar informacion de usuario</h5>
                
                <div className="modal-body">
                <div className="mb-3 row ps-1">
            <label className="col-sm-2 col-form-label ps-3">Nombre</label>
            <div className="col-8 ps-5">
              <input type="text" className="form-control ms-1" id="inputNombre" placeholder={props.Usuario?.nombre} value={nombreUsuario} onChange={nombreUsuarioChangeHandler} required/>
            </div>
        </div>
        <div className="mb-3 row ps-1">
            <label className="col-sm-2 col-form-label ps-3">Correo</label>
            <div className="col-8 ps-5">
              <input type="text" className="form-control ms-1" id="inputCorreo" placeholder={props.Usuario?.correo} value={correo} onChange={correoChangeHandler} required/>
            </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-3 col-form-label ps-3 ms-1">Contraseña</label>
          <div className="col-7">
            <input type="password" className="form-control " id="inputPassword" placeholder={props.Usuario?.contraseña} value={contraseña} onChange={contraseñaChangeHandler} required/>
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
                          if(props.Usuario != null){
                            props.EditarUsuario(props.Usuario.id, nombreUsuario, correo, contraseña)
                          }
                        } }>Aceptar</button>
          </div>
        </div>
                </div>
        </div>

                </div>
            </div>)
}

export default EditarInfoUsuario


