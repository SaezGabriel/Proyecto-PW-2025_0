import { useState } from "react";
import { useNavigate} from "react-router-dom";
import { useEffect } from "react"


//const URL_BACKEND = import.meta.env.VITE_URL_BACKEND || "http://localhost:5000"
const LoginPage = () => {
    let navigate = useNavigate();
    const [correo, setCorreo] = useState<string>("");
    const [contraseña, setContraseña] = useState<string>("");

    useEffect(() => {
        const usuario = sessionStorage.getItem("Usuario");
    
        if (usuario !== null) {
            const userData = JSON.parse(usuario); // Parseamos los datos almacenados
    
            if (userData.rol === 1) {
                navigate("/MainPage_usuario");
            } else if (userData.rol === 2) {
                navigate("/MainPage_admin");
            }
        }
    }, []); // Agrega un array vacío para que se ejecute solo al montar el componente
    
    
    const loginHandler = async (correo: string, contraseña: string) => {
        console.log("Intentando iniciar sesión...");
        const userData = { correo, contraseña };
    
        try {
            const resp = await fetch("http://localhost:3000/usuarios/login", {
                method: "POST",
                body: JSON.stringify(userData),
                headers: {
                    "Content-Type": "application/json",
                },
            });
    
            const data = await resp.json();
            console.log("Respuesta del servidor:", data);
    
            if (resp.ok) { 
                sessionStorage.setItem("Usuario", JSON.stringify(data)); // Guarda usuario y rol
                console.log("Redirigiendo según rol...");
    
                if (Number(data.rol) === 1) {
                    navigate("/MainPage_usuario");
                } else if (Number(data.rol) === 2) {
                    navigate("/MainPage_admin");
                }
                 else {
                    console.error("Rol no reconocido:", data.rol);
                }
            } else {
                console.log("Error de autenticación:", data.msg);
            }
        } catch (error) {
            console.error("Error en la solicitud:", error);
        }
    };
    
    
    


    const handleCorreoChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setCorreo(e.currentTarget.value)
    }
    const handleConstraseñaChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setContraseña(e.currentTarget.value)
    }
 return     <div
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
                                value={correo}
                                onChange={handleCorreoChange}
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
                                value={contraseña}
                                onChange={handleConstraseñaChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-12 text-center">
                            <a href="" onClick={()=>{navigate("/nueva-contraseña")}} className="text-decoration-underline">
                                ¿Olvidaste tu contraseña?
                            </a>
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-12">
                            <div className="d-grid gap-2">
                                <button  onClick={ () =>{
                                    loginHandler(correo,contraseña)
                                }} className="btn btn-primary" type="submit">
                                    Ingresar
                                </button>
                            </div>
                        </div>
                    </div >
                    <div className="row mb-2">
                        <div className="col-12 text-center">
                            <span className="text-muted">O</span>
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-12">
                            <div className="d-grid gap-2">

                                <button className="btn btn-secondary" onClick={()=>{navigate("/registrar-nuevo")}} type="button">

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