interface AgregarPresupuestoProps {
    showModal : boolean;
    closeModal : () => void
}

const AgregarPresupuesto = (props : AgregarPresupuestoProps) => {
    return (
        <div className={ props.showModal == true ? "modal fade show d-block bg-dark bg-opacity-50" : "modal fade" } >
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                
                <h5 className="text-center m-4">Agregar Presupuesto</h5>
                
                <div className="modal-body">
                <div className="mb-3 row ms-4">
            <label className="col-sm-3 col-form-label">Categoria</label>
            <div className="col-7 mb-3">
                <select className="form-select" id="inputGroupSelect01">
                  <option selected>Servicios</option>
                  <option value="ALimentacion">ALimentacion</option>
                  <option value="Ocio">Ocio</option>
                </select>
              </div>
        </div>
        <div className="mb-3 row ms-4">
            <label className="col-sm-3 col-form-label">Monto</label>
            <div className="col-7">
              <input type="text" className="form-control" id="inputMonto" placeholder="Ingresar monto en soles" value="" required/>
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
                            props.closeModal()
                        } }>Aceptar</button>
          </div>
        </div>
        </div>

                </div>
            </div>
            </div>)
}

export default AgregarPresupuesto