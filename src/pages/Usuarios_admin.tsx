import TablaUsuario,{Usuarios} from "./Tabla_usuarios_admin"
import FiltrarRol from "./FiltrarRol"
import { useEffect, useState } from "react"
import RegistroUsuario from "./RegistroUsuario";



const UsuariosAdmin = () => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const[showAgregar, setAgregar]=useState<boolean>(false)
  const [usuarios, setUsuarios] = useState<Usuarios[]>([])

  
  const httpObtenerUsuarios = async () => {
  const url = "http://localhost:5000/usuarios"
  const resp = await fetch(url)
  const data = await resp.json()
    if (data.msg == "") {
        const listaUsuarios = data.usuarios
        setUsuarios(listaUsuarios)
        console.log(listaUsuarios)
    }else {
        console.error(`Error al obtener usuarios: ${data.msg}`)
    }
  }

  const httpAgregarUsuario = async (nombreUsuario : string, correo : string, contraseña : string, rol : number) => {
    const url = "http://localhost:5000/usuarios"
    const resp = await fetch(url, {
        method : "POST",
        body : JSON.stringify({
            id : null,
            nombre : nombreUsuario,
            correo : correo,
            contraseña : contraseña,
            rol : rol
        }),
        headers : {
            "Content-Type": "application/json",
        }
    })
    const data = await resp.json()
    if (data.msg == "") {
      closeModalAgregar
    }
}


  useEffect( ()=> {
    httpObtenerUsuarios()
  },[])

  

const closeModalAgregar = () => {
  setAgregar(false)
} 
  ///const agregarElementoTabla = (elem : Usuarios) => {
  ///    tabla.push(elem)
  ///}
  
  return <>
        <TablaUsuario listaElementos={usuarios} openModalAgregar={() => {setAgregar(true)}} openModal={() => {setShowModal(true)}} ObtenerUsuario={httpObtenerUsuarios}/>
        <RegistroUsuario showModal={ showAgregar } closeModal={closeModalAgregar} GuardarUsuario={ async (nombreUsuario : string, correo : string, contraseña : string, rol : number) => {
                await httpAgregarUsuario(nombreUsuario, correo, contraseña, rol)
                await httpObtenerUsuarios()
            }}/>
        <FiltrarRol showModal={showModal} closeModal={() => {setShowModal(false)}} />
        
    </>
};

export default UsuariosAdmin;
