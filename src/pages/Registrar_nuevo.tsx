import { useState } from "react";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

const Registrar_nuevo = () => {
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState<string>("");
    const [correo, setCorreo] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [error, setError] = useState<string>('');

    const manejarEnvio = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();  // Evita que el formulario recargue la página
    
        // Verificamos si las contraseñas coinciden
        if (password !== confirmPassword) {
          setError('Las contraseñas no coinciden');
          return;
        }
    
        // Aquí podrías enviar los datos al servidor o hacer algo más
        console.log('Registro exitoso', { usuario, password });
        navigate("/confirmacion-correo")
      };

    
    const handleUsuarioChange = (e : React.ChangeEvent<HTMLInputElement>) => {
            setUsuario(e.currentTarget.value)
    }
    const handleCorreoChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setCorreo(e.currentTarget.value)
    }
    const handlePasswordChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }
    const handleCPasswordChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.currentTarget.value)
    }


    return <div
    className="d-flex justify-content-center align-items-center bg-body-secondary"
    style={{ height: "100vh" }}
    >
    <div
        className="p-4 rounded bg-white"
        style={{ width: "100%", maxWidth: "400px" }}
    >
        <h1 className="text-center mb-4">Registro nuevo</h1>
        <form onSubmit={manejarEnvio}>
            <div className="row mb-3">
                <div className="col-12">
                    <input
                        
                        className="form-control"
                        placeholder="Nombre de usuario:"
                        value={usuario}
                        onChange={handleUsuarioChange}
                        required
                    />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-12">
                    <input
                        
                        className="form-control"
                        type="email"
                        placeholder="Correo:"
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
                        placeholder="Contraseña:"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-12">
                    <input    
                        className="form-control"
                        type="password"
                        placeholder="Confirmar contraseña"
                        value={confirmPassword}
                        onChange={handleCPasswordChange}
                        required
                    />
                </div>
            </div>
            {error && <p style={{ color : 'red' }}>ERROR: Las contraseñas deben coincidir</p>}

            <div className="row mb-2">
                <div className="col-12">
                    <div className="d-grid gap-2">
                        <button  onClick={ () =>{
                            loginHandler(usuario,password)
                        }} className="btn btn-primary" type="submit">
                            Registrar
                        </button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>

}

export default Registrar_nuevo
