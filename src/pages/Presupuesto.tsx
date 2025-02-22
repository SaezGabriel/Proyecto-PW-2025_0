import AgregarPresupuesto from "./AgregarPresupuesto"
import { useEffect, useState } from "react"
import EditarPresupuesto from "./EditarPresupuesto"
import BorrarPresupuesto from "./Borrarpresupuesto"
import { Categoria } from "./EditarPresupuesto"

interface Presupuesto{
  id : number;
  CategoriaId : number;
  Categoria : Categoria
  Monto : number
}

const Presupuesto = () => {

    const catvacio : Categoria={
      id : 0,
      nombre : ""
    }

    const vacio : Presupuesto = {
      id:0,
      CategoriaId : 0,
      Categoria : catvacio,
      Monto:0
    }

    const [categorias, setCategorias] = useState<Categoria[]>([])
    const [presupuestoSeleccionado, setPresupuestoSeleccionado]=useState<Presupuesto>(vacio)
    const [presupuestos,setPresupuestos] = useState<Presupuesto[]>([])
    const [showModalA, setShowModalA] = useState<boolean>(false)
    const [showEditarPresupuesto, setEditarPresupuesto] = useState<boolean>(false)
    const [showBorrarPresupuesto, setBorrarPresupuesto] = useState<boolean>(false)
    
    const httpObtenerPresupuestos = async () => {
      const url = "http://localhost:3000/presupuestos"
      const resp = await fetch(url)
      const data = await resp.json()
        if (data.msg == "") {
            const listaPresupuestos = data.presupuestos
            setPresupuestos(listaPresupuestos)
        }else {
            console.error(`Error al obtener usuarios: ${data.msg}`)
        }
      }
    
    const httpObtenerCategorias = async () => {
      const url = "http://localhost:3000/categorias"
      const resp = await fetch(url)
      const data = await resp.json()
      if (data.msg == "") {
          const listaCategorias = data.categorias
          setCategorias(listaCategorias)
      }else {
          console.error(`Error al obtener categorias: ${data.msg}`)
      }
    }
    useEffect( ()=> {
      httpObtenerPresupuestos()
      httpObtenerCategorias()
      },[])

    const httpEditarPresupuesto = async (id : number, CategoriaId: number, monto: number) => {
      const url = "http://localhost:5000/presupuestos?id="+id
      const resp = await fetch(url, {
        method: "PUT",
        body: JSON.stringify({
          id : id,
          CategoriaId: CategoriaId,
          monto : monto
        }),
        headers: {
          "Content-Type": "application/json",
        }
      })
      const data = await resp.json()
      if (data.msg === "") {
        setEditarPresupuesto(false)
      } else {
        console.error(`Error al editar usuario: ${data.msg}`)
      }
    }
      
    const httpEliminarPresupuesto = async (id : number) => {
      const url = "http://localhost:5000/usuarios?id=" + id
      const resp = await fetch(url, {
          method : "DELETE"
      })
      const data = await resp.json()
      if (data.msg == "") {
        httpObtenerPresupuestos()
      }else {
          console.error(`Error al eliminar un usuario: ${data.msg}`)
      }
    }
    return (
        <div className="container mt-5 bg-light">
    <div className="d-flex justify-content-between align-items-center mb-3">
      <h2 className="fw-bold">Mis presupuestos</h2>
      <button className="btn btn-primary" onClick={()=>{
                                setShowModalA(true)
                            }}>Agregar</button>
    </div>
    <AgregarPresupuesto showModal={ showModalA } 
            closeModal={ () => {
            setShowModalA(false)
            } }/>
    <div className="card">
      <table className="table table-hover mb-0">
        <thead className="table-primary text-center">
          <tr>
            <th>Categoría</th>
            <th>Monto</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody className="text-center">
        { presupuestos.map((presupuesto : Presupuesto) => {
                return <tr>
                <td scope="row">{presupuesto.Categoria != null 
                                        ? presupuesto.Categoria.nombre 
                                        : "-"}</td>
                <td>{presupuesto.Monto}</td>
                <td>
                <button className="btn btn-outline-secondary btn-sm me-2" onClick={()=>{setPresupuestoSeleccionado(presupuesto); setEditarPresupuesto(true)}
                            }>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
</svg>
                
              </button>
              <EditarPresupuesto showModal={showEditarPresupuesto} closeModal={()=>{setEditarPresupuesto(false)}} Categorias={categorias} PresupuestoEditar={presupuestoSeleccionado} EditarPresupuesto={ async (id:number,CategoriaId : number, monto : number) => {
                await httpEditarPresupuesto(id, CategoriaId, monto)
                await httpObtenerPresupuestos()
            }}/>
              <button className="btn btn-outline-secondary btn-sm" onClick={()=>{
                                setBorrarPresupuesto(true);
                            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
</svg>
              </button>
              <BorrarPresupuesto showModal={showBorrarPresupuesto} closeModal={()=>{setBorrarPresupuesto(false)}} PresupuestoBorrar={presupuestoSeleccionado.id} Eliminar={  async (id : number) => {
                        await httpEliminarPresupuesto(id)
                    }}/>
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

export default Presupuesto