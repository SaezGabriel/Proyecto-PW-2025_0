const Filtrar_rol = () => {
   
    return<div className="bg-light d-flex justify-content-center align-items-center vh-100">
      <div className="container p-5 bg-white rounded-5" style={{ maxWidth: '400px', width: '100%', height: '280px' }}>
        <h5 className="text-center">Filtrar por rol de usuario</h5>
        <form>
          <div className="row mb-4 mt-5 justify-content-center">
            <div className="col-md-2 text-end">
              <label htmlFor="rol" className="fw-bold fs-5">Rol</label>
            </div>
            <div className="col-md-8">
              <select id="rol" name="rol" className="form-select">
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
            </div>
          </div>
          {/* Botones centrados */}
          <div className="d-flex justify-content-center mt-4">
            <button type="button" className="btn btn-secondary me-5" style={{ paddingTop: '.4rem', paddingBottom: '.4rem', paddingLeft: '2rem', paddingRight: '2rem', fontSize: '1rem' }}>
              Cancelar
            </button>
            <button type="button" className="btn btn-primary" style={{ paddingTop: '.4rem', paddingBottom: '.4rem', paddingLeft: '2rem', paddingRight: '2rem', fontSize: '1rem' }}>
              Aceptar
            </button>
          </div>
        </form>
      </div>
    </div>
  
}

export default Filtrar_rol;
