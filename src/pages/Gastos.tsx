
interface Gasto{
    fecha:string,
    categoria:string,
    descripcion:string,
    recurrente:string,
    monto:number
}

let Lista_gastos:Gasto[]

import Menu_filtro_usuario from "./Menu_filtrar_egresos_user";

const Gastos = () =>{
    return (
        <div className="container mt-5 bg-light">
    <div className="d-flex justify-content-between align-items-center mb-3">
      <h2 className="fw-bold">Mis Gastos</h2>
      <button className="btn btn-primary" onClick={Menu_filtro_usuario}>Filtrar</button>
      <button className="btn btn-primary">Exportar</button>
      <button className="btn btn-primary">Agregar</button>
    
    </div>
    <div className="card">
      <table className="table table-hover mb-0">
        <thead className="table-primary text-center">
          <tr>
            <th>Fecha</th>
            <th>Categoría</th>
            <th>Descripcion</th>
            <th>Recurrente</th>
            <th>Monto</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ocio</td>
            <td>S/. 129.99</td>
            <td className="text-center">
              <button className="btn btn-outline-secondary btn-sm me-2">
                <i className=""></i>
              </button>
              <button className="btn btn-outline-secondary btn-sm">
                <i className=""></i>
              </button>
            </td>
          </tr>
          <tr>
            <td>Servicios</td>
            <td>S/. 1229.99</td>
            <td className="text-center">
              <button className="btn btn-outline-secondary btn-sm me-2">
                <i className=""></i>
              </button>
              <button className="btn btn-outline-secondary btn-sm">
                <i className=""></i>
              </button>
            </td>
          </tr>
          <tr>
            <td>Alimentación</td>
            <td>S/. 779.99</td>
            <td className="text-center">
              <button className="btn btn-outline-secondary btn-sm me-2">
                <i className=""></i>
              </button>
              <button className="btn btn-outline-secondary btn-sm">
                <i className=""></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
    )
}

export default Gastos