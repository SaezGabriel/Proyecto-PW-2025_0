import "./CSS/egresos.css"

interface elementosTabla {
  fecha : string;
  categoria : string;
  descripcion : string;
  monto : string;
  recursivo : boolean;
}

interface egresosProps {
  listaElementos : elementosTabla[];
  openModalAgregar : () => void;
  openModalEditar : (index : number) => void;
  openModalEliminar : (index : number) => void;
  openModalFiltrar : () => void
  openModalExportar: () => void;
}

const TablaEgresos = (props : egresosProps) => {
  return <>
      <div className="container mt-5 bg-light"> 
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="flex-row">
            <h2 className="fw-bold">Mis gastos</h2>
          </div>
          <div className="flex-row-reverse">
            <button className="btn btn-primary me-2" onClick={() => {props.openModalFiltrar()}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-filter" viewBox="0 0 16 16">
                <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
              </svg> Filtrar
            </button>
            <button className="btn btn-primary me-2" onClick={()=> {props.openModalExportar()}}>Exportar</button>
            <button className="btn btn-primary" onClick={() => {props.openModalAgregar()}}>Agregar</button>
          </div>
        </div>
        <div className="card">
          <table className="table">
            <thead className="table-primary text-center">
              <tr>
                <th scope="col" className="text-start">Fecha</th>
                <th scope="col" className="text-start">Categoria</th>
                <th scope="col" className="text-start">Descripcion</th>
                <th scope="col" className="text-start">Recurrente</th>
                <th scope="col" className="text-start">Monto</th>
                <th scope="col" className="text-start">Accion</th>
              </tr>
            </thead>
            <tbody id="TBody">
                {
                  props.listaElementos.map((egreso : elementosTabla, index : number) => {

                    let textoRec : string

                    if(egreso.recursivo){
                      textoRec = "Si"
                    }else{
                      textoRec = "No"
                    }

                    return <tr>
                        <td>{egreso.fecha}</td>
                        <td>{egreso.categoria}</td>
                        <td>{egreso.descripcion}</td>

                        <td>{textoRec}</td>

                        <td>{egreso.monto}</td>
                        <td>
                          <i className="lapiz accion me-2" onClick={() => {props.openModalEditar(index)}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                              <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
                            </svg>
                          </i> 
                          <i className="basura accion" onClick={() => {props.openModalEliminar(index)}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" className="bi bi-trash-fill" viewBox="0 0 16 16">
                              <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                            </svg>
                          </i>
                        </td>
                    </tr>
                  })
                }
            </tbody>
          </table>
        </div>
      </div>
  </>
}

export default TablaEgresos