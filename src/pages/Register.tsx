const Register = () => {
    return <div 
    className="d-flex justify-content-center align-items-center bg-body-secondary" 
    style={{height: "100vh"}}>
    <div className=" p-4 rounded bg-white" style={{ width: "100%", maxWidth: "400px" }}>
    <h1 className="text-center mb-4">Registrarse</h1>
    <form>
        <div className="row mb-3">
            <div className="col-12">
                <input id="nombre" className="form-control" type="name" placeholder="Ingresar nombre" required />
            </div>
        </div>
        <div className="row mb-3">
            <div className="col-12">
                <input id="email" className="form-control" type="email" placeholder="Ingresar correo" required />
            </div>
        </div>
        <div className="row mb-3">
            <div className="col-12">
                <input id="password" className="form-control" type="password" placeholder="Ingresar contraseña" required />
            </div>
        </div>
        <div className="row mb-3">
            <div className="col-12">
                <input id="password" className="form-control" type="password" placeholder="Confirmar contraseña" required />
            </div>
        </div>
        <div className="row mb-2">
            <div className="col-12">
                <div className="d-grid gap-2">
                    <button className="btn btn-primary" type="submit">Completar registro</button>
                </div>
            </div>
        </div>
    </form>
    </div>
</div>
}

export default Register