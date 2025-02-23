import Presupuesto from "./Presupuesto";
import { useEffect, useState } from "react"
import { Usuarios } from "./Tabla_usuarios_admin";


export interface Categoria{
  id : number
  UsuarioId : number
  nombre : string
}

interface EditarPresupuestoProps {
    showModal : boolean;
    Categorias : Categoria[]
    closeModal : () => void
    PresupuestoEditar : Presupuesto
    EditarPresupuesto : (UsuarioId:number, monto_Mensual: number, categoriaId: number, PresupuestoSeleccionado : Presupuesto) => void
}

const EditarPresupuesto = (props : EditarPresupuestoProps) => {
  
  
  const [UsuarioId, setUsuarioId] = useState<number>(props.PresupuestoEditar.UsuarioId)
  const [CategoriaId, setCategoriaId] = useState<number>(props.PresupuestoEditar.categoriaId) 
  const [monto, setMonto] = useState<number>(props.PresupuestoEditar.monto_Mensual)
  
  const nombrePresupuestoChangeHandler = (e : React.ChangeEvent<HTMLSelectElement>) => {
    setCategoriaId(parseInt(e.target.value))
  }

  const montoChangeHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
    setMonto(parseInt(e.target.value))
  }
  
  useEffect(() => {
    setUsuarioId(props.PresupuestoEditar.UsuarioId)
    setCategoriaId(props.PresupuestoEditar.categoriaId);
    setMonto(props.PresupuestoEditar.monto_Mensual);
}, [props.PresupuestoEditar]);

  return (
        <div className={ props.showModal == true ? "modal fade show d-block bg-dark bg-opacity-50" : "modal fade" } >
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                
                <h5 className="text-center m-4">Editar Presupuesto</h5>
                
                <div className="modal-body">
                <div className="mb-3 row ms-4">
            <label className="col-sm-3 col-form-label">Categoria</label>
            <div className="col-7 mb-3">
                <select className="form-select" value={CategoriaId} onChange={nombrePresupuestoChangeHandler} id="presupuesto nombre">
                {
                  props.Categorias.map((cat : Categoria) => {
                    return <option value={cat.id}>
                            {cat.nombre}
                          </option>
                    })
                }
                </select>
              </div>
        </div>
        <div className="mb-3 row ms-4">
            <label className="col-sm-3 col-form-label">Monto</label>
            <div className="col-7">
              <input type="text" className="form-control" id="inputMonto" placeholder="Ingresar monto" value={monto} onChange={montoChangeHandler} required/>
            </div>
        </div>
        <div className="row p-4">
          <div className="col-6">
            <button type="button" className="btn btn-secondary w-75" onClick={ () =>  {
                            props.closeModal()
                        } }>Cancelar</button>
          </div>
          <div className="col-6">  
            <button type="button" className="btn btn-primary w-75" onClick={ () =>  {
                            props.EditarPresupuesto(UsuarioId,CategoriaId,monto,props.PresupuestoEditar)
                        } }>Aceptar</button>
          </div>
        </div>

                </div>
            </div>
            </div>
            </div>)
}

export default EditarPresupuesto