import "./CSS/Tabla_Usuario.css"

interface Usuarios {
    nombre : string;
    correo : string;
    rol : 'Admin' | 'User'; // El rol puede ser 'Admin' o 'User'
  }
  
  interface usuarioProps {
    listaElementos : Usuarios[];
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
                <th scope="col">Nombre</th>
                <th scope="col">Correo</th>
                <th scope="col">Rol</th>
                <th scope="col">Accion</th>
              </tr>
            </thead>
            <tbody id="TBody">
              <tr>
                <td scope="row">Renzo</td>
                <td>renzo@gmail.com</td>
                <td>Admin</td>
                <td>
                    <i className="lapiz">Editar</i> 
                    <i className="basura">Borrar</i>
                </td>
              </tr>
              <tr>
                <td scope="row">Sebastian</td>
                <td>sebastian@gmail.com</td>
                <td>User</td>
                <td>
                    <i className="lapiz">Editar</i> 
                    <i className="basura">Borrar</i>
                </td>
              </tr>
              <tr>
                <td scope="row">Kevin</td>
                <td>kevin@gmail.com</td>
                <td>Admin</td>
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