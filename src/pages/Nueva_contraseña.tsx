import { useNavigate } from "react-router-dom";

const Nueva_contraseña = () => {
    const navigate = useNavigate();
    const handleLogIn= () => {
        navigate("/");
    };
    return (<div className="bg-light d-flex justify-content-center align-items-center vh-100">
        <div className="container bg-white text-center w-25">
            <form id="passwordForm">
              <div className="h2 m-5">Nueva contraseña</div>
              <div className="m-4">
                <div className="mb-2">
                    <input type="password" className="form-control" id="newPassword" placeholder="Nueva contraseña" required />
                  </div>
                  <div>
                    <input type="password" className="form-control" id="confirmPassword" placeholder="Re-escribir nueva contraseña" required />
                  </div>
              </div>
              <div className="mt-5 mb-5 m-4">
                <button onClick={handleLogIn} type="button" className="btn btn-primary w-100">Aceptar</button>
              </div>
            </form>
        </div>
    </div>)
}


export default Nueva_contraseña