import "./CSS/Tabla_Usuario.css"
import { useEffect, useState } from "react";
import EditarUsuario from "./EditarUsuario";
import BorrarUsuario from "./BorrarUsuario";


export interface Usuarios {
    id: number;
    nombre : string;
    contraseña : string;
    correo : string;
    rol : 'Admin' | 'User'; // El rol puede ser 'Admin' o 'User'
  }
  
  interface usuarioProps {
    listaElementos : Usuarios[];
    openModal : () => void
    openModalAgregar : () => void  
    ObtenerUsuario : () => void
  }

const TablaUsuario = (props : usuarioProps) => {

  const[showEditar, setEditar]=useState<boolean>(false)
  const[showBorrar, setBorrar]=useState<boolean>(false)

  const httpEditarUsuario = async (id : number, nombreUsuario: string, correo: string, contraseña: string, rol: number) => {
    const url = "http://localhost:5000/usuarios?id="+id
    const resp = await fetch(url, {
      method: "PUT",
      body: JSON.stringify({
        id : id,
        nombre: nombreUsuario,
        correo: correo,
        contraseña: contraseña,
        rol: rol
      }),
      headers: {
        "Content-Type": "application/json",
      }
    })
    const data = await resp.json()
    if (data.msg === "") {
      setEditar(false)
    } else {
      console.error(`Error al editar usuario: ${data.msg}`)
    }
  }
  
  const httpEliminarUsuario = async (id : number) => {
    const url = "http://localhost:5000/usuarios?id=" + id
    const resp = await fetch(url, {
        method : "DELETE"
    })
    const data = await resp.json()
    if (data.msg == "") {
        props.ObtenerUsuario()
    }else {
        console.error(`Error al eliminar un usuario: ${data.msg}`)
    }
  }

  useEffect( ()=> {
    props.ObtenerUsuario()
  },[])

  return (
      <div className="container mt-5 bg-light">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="flex-row">
            <h2 className="fw-bold">Usuarios</h2>
          </div>
          <div className="flex-row-reverse">
            <button className="btn btn-primary me-2 " onClick={()=>{props.openModal()}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-filter" viewBox="0 0 16 16">
                <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
              </svg> Filtrar
            </button>
            
            <button className="btn btn-secondary" onClick={()=>{
                                props.openModalAgregar()}}>Agregar</button>
          </div>
        </div>
        <div className="card">
          <table className="table table-hover mb-0">
            <thead className="table-primary text-center">
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Correo</th>
                <th scope="col">Rol</th>
                <th scope="col">Accion</th>
              </tr>
            </thead>
            <tbody id="TBODY" className="text-center">
              { props.listaElementos.map((usuario : Usuarios) => {
                return <tr>
                <td scope="row">{usuario.nombre}</td>
                <td>{usuario.correo}</td>
                <td>{usuario.rol}</td>
                <td>
                <button className="btn btn-outline-secondary btn-sm me-2" onClick={()=>{
                                setEditar(true);
                            }}>
                <EditarUsuario showModal={showEditar} closeModal={()=>{setEditar(false)}} UsuarioSeleccionadoEditar={usuario} EditarUsuario={ async (id:number,nombreUsuario : string, correo : string, contraseña : string, rol : number) => {
                await httpEditarUsuario(id, nombreUsuario, correo, contraseña, rol)
                await props.ObtenerUsuario()
            }}/>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
</svg>
              </button>
              <button className="btn btn-outline-secondary btn-sm" onClick={()=>{
                                setBorrar(true);
                            }}>
              <BorrarUsuario showModal={showBorrar} closeModal={()=>{setBorrar(false)}} UsuarioBorrar={usuario.id} Eliminar={  async (id : number) => {
                        await httpEliminarUsuario(id)
                    }}/>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
</svg>
              </button>
                </td>
              </tr>
            })
          }
            </tbody>
          </table>
        </div>                  
      </div>
  )
}

export default TablaUsuario