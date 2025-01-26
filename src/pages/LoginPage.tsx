const LoginPage = () => {

   
    return  <div
            className="d-flex justify-content-center align-items-center bg-body-secondary"
            style={{ height: "100vh" }}
        >
            <div
                className="p-4 rounded bg-white"
                style={{ width: "100%", maxWidth: "400px" }}
            >
                <h1 className="text-center mb-4">Log In</h1>
                <form>
                    <div className="row mb-3">
                        <div className="col-12">
                            <input
                                
                                className="form-control"
                                type="email"
                                placeholder="Ingresar correo"
                                required
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-12">
                            <input    
                                className="form-control"
                                type="password"
                                placeholder="Ingresar contraseña"
                                required
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-12 text-center">
                            <a href="#" className="text-decoration-underline">
                                ¿Olvidaste tu contraseña?
                            </a>
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-12">
                            <div className="d-grid gap-2">
                                <button className="btn btn-primary" type="submit">
                                    Ingresar
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-12 text-center">
                            <span className="text-muted">O</span>
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-12">
                            <div className="d-grid gap-2">
                                <button className="btn btn-secondary" type="button">
                                    Registrarse
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    
}

export default LoginPage