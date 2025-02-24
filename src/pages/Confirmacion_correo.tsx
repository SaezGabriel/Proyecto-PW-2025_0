import { useLocation, useNavigate } from "react-router-dom";

const Confirmacion_correo = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { usuario, correo, password } = location.state || {};
     
    return        <div className="bg-body-secondary">
            <div className="container vh-100 d-flex justify-content-center align-items-center">
                <div className="row">
                    <div className="col-12">
                        <div className="card p-4" style={{ maxWidth: "570px", width: "100%" }}>
                            <h3 className="text-left">Confirmación correo electrónico</h3>
                            <p className="card-text text-left mt-4">
                                Un correo electrónico de confirmación ha sido enviado a la dirección de correo registrada
                                en la aplicación. Agradeceremos que confirme su dirección de correo antes de autenticarse.
                            </p>
                            <p className="text-left">Gracias.</p>
                            <div className="row justify-content-center">
                                <div className="col-6">

                                    <button onClick={ () =>{navigate("/")}} className="btn btn-primary w-100">Confirmar</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
}

export default Confirmacion_correo;