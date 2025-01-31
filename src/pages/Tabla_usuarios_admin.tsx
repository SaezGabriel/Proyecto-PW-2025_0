import "./CSS/Tabla_Usuario.css"

interface elementosTabla {
  fecha : string;
  categoria : string;
  descripcion : string;
  monto : string;
}

interface usuarioProps {
  listaElementos : elementosTabla[];
  openModal : () => void
}

const TablaUsuario = (props : usuarioProps) => {

  return (
      <div className="container mt-5 bg-light">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="flex-row">
            <h2 className="fw-bold">Mis gastos</h2>
          </div>
          <div className="flex-row-reverse">
            <button className="btn btn-primary me-2" onClick={() => {props.openModal()}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-filter" viewBox="0 0 16 16">
                <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
              </svg> Filtrar
            </button>
            
            <button className="btn btn-secondary">Agregar</button>
          </div>
        </div>
        <div className="card">
          <table className="table table-hover mb-0">
            <thead className="table-primary text-center">
              <tr>
                <th scope="col">Fecha</th>
                <th scope="col">Categoria</th>
                <th scope="col">Descripcion</th>
                <th scope="col">Recurrente</th>
                <th scope="col">Monto</th>
                <th scope="col">Accion</th>
              </tr>
            </thead>
            <tbody id="TBody">
              <tr>
                <td scope="row">12/12/2024</td>
                <td>Ocio</td>
                <td>La niebla, libro de Stephen King</td>
                <td>No</td>
                <td>S/. 29.99</td>
                <td>
                    <i className="lapiz">Editar</i> 
                    <i className="basura">Borrar</i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  )
}

export default TablaUsuario