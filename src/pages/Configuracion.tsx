import { useEffect, useState } from "react"
import EditarInfoUsuario from "./EditarInfoUsuario"
import { Usuarios } from "./Tabla_usuarios_admin"


const Configuracion = () =>{

    const[usuarioLogin,setUsuarioLogin]=useState<Usuarios>()
    const [showModal, setShowModal] = useState<boolean>(false)

    useEffect(()=>{
        const usuarioCorreo: string = "pepe@example.com"
        if(usuarioCorreo != null){
            httpObtenerUsuario(usuarioCorreo)}
        
    },[])

    

    const httpObtenerUsuario = async (correo:string) => {
        const url = "http://localhost:3000/usuarios?correo="+correo
        const resp = await fetch(url)
        const data = await resp.json()
          if ( data.msg == "") {
            const Usuario = data.usuarios
            setUsuarioLogin(Usuario)
            
          }else {
              console.error(`Error al obtener usuario: ${data.msg}`)
          }
        }
    
    const httpEditarUsuario = async (id : number, nombreUsuario: string, correo: string, contraseña: string) => {
        const url = "http://localhost:3000/usuarios?id="+id
        const resp = await fetch(url, {
            method: "PUT",
            body: JSON.stringify({
                id : id,
                nombre: nombreUsuario,
                correo: correo,
                contraseña: contraseña,
            }),
            headers: {
                "Content-Type": "application/json",
            }
        })
        const data = await resp.json()
        if (data.msg === "") {
            setShowModal(false)
        } else {
            console.error(`Error al editar usuario: ${data.msg}`)
        }
    }

    return (
        <div className="container mt-5 bg-light">
            <div className=" mb-3">
                <h2 className="fw-bold p-3">Mi perfil</h2>
            </div>
            <div className="row bg-white me-5">
                <div className="d-flex flex-row col-12 mb-3">
                    
                        <div className="col-5 p-4 ps-3">
                            <h4>Informacion Personal</h4>
                        </div>
                        <div className="p-4 col-7 text-end">
                            <button type="button" className="btn btn-primary col-4" onClick={()=>{
                                setShowModal(true)
                            }}>Editar</button>
                        </div>
                    
                </div>
            
                <div className="container row">
                    <div className="col-6">
                        <div className="col-1 p-3 pb-1">
                            Nombre
                        </div>
                        <div className="col-4 p-3">
                            {usuarioLogin?.nombre}
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="col-4 p-3 pb-1">
                            Correo electronico
                        </div>
                        <div className="col-3 p-3 pb-1">
                            {usuarioLogin?.correo}
                        </div>
                    </div>
                </div>
                <div className="container mb-5">
                    <div className="col-1 p-3 pb-1">
                        Contraseña
                    </div>
                    <div className="col-3 p-3 pb-1">
                        {usuarioLogin?.contraseña}
                    </div>
                </div>
            </div>
            <EditarInfoUsuario showModal={ showModal } 
            closeModal={ () => {
            setShowModal(false)
            } }
            Usuario={usuarioLogin}
            EditarUsuario={ async (id:number,nombreUsuario : string, correo : string, contraseña : string) => {
                await httpEditarUsuario(id, nombreUsuario, correo, contraseña)
                await httpObtenerUsuario(nombreUsuario)}}/>
        </div>
        

    )
}

export default Configuracion