import "./CSS/historial.css"

interface elementosTabla {
    id : string;
    nombre : string;
    correo : string;
    fecha : string;
    hora : string;
    accion : string;
}

interface egresosProps {
    listaElementos : elementosTabla[];
}


const TablaHistorial = (props : egresosProps) => {
    return <>
    <div className="container mt-5 bg-light"> 
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="flex-row">
          <h2 className="fw-bold">Historial</h2>
        </div>
      </div>
      <div className="card">
        <table className="table table-hover mb-0">
          <thead className="table-primary text-center">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Nombre</th>
              <th scope="col">Correo</th>
              <th scope="col">Fecha</th>
              <th scope="col">Hora</th>
              <th scope="col">Accion</th>
            </tr>
          </thead>
          <tbody id="TBody">
              {
                props.listaElementos.map((historia : elementosTabla) => {
                  return <tr>
                      <td>{historia.id}</td>
                      <td>{historia.nombre}</td>
                      <td>{historia.correo}</td>
                      <td>{historia.fecha}</td>
                      <td>{historia.hora}</td>
                      <td>{historia.accion}</td>
                  </tr>
                })
              }
          </tbody>
        </table>
      </div>
    </div>
</>
}

export default TablaHistorial