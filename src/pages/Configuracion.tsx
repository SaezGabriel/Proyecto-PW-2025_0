import { useState } from "react"
import EditarInfoUsuario from "./EditarInfoUsuario"

const Configuracion = () =>
{
    const [showModal, setShowModal] = useState<boolean>(false)

    return (
        <div className="container mt-5 bg-light">
            <div className=" mb-3">
                <h2 className="fw-bold p-3">Mi perfil</h2>
            </div>
            <div className="row bg-white me-5">
                <div className="d-flex flex-row col-12 mb-3">
                    
                        <div className="col-5 p-4 ps-3">
                            <h4>Informacion Personal</h4>
                        </div>
                        <div className="p-4 col-7 text-end">
                            <button type="button" className="btn btn-primary col-4" onClick={()=>{
                                setShowModal(true)
                            }}>Editar</button>
                        </div>
                    
                </div>
            
                <div className="container row">
                    <div className="col-6">
                        <div className="col-1 p-3 pb-1">
                            Nombre
                        </div>
                        <div className="col-4 p-3">
                            Jessica Straus
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="col-4 p-3 pb-1">
                            Correo electronico
                        </div>
                        <div className="col-3 p-3 pb-1">
                            jess@taxes.com
                        </div>
                    </div>
                </div>
                <div className="container mb-5">
                    <div className="col-1 p-3 pb-1">
                        Contraseña
                    </div>
                    <div className="col-3 p-3 pb-1">
                        12345
                    </div>
                </div>
            </div>
            <EditarInfoUsuario showModal={ showModal } 
            closeModal={ () => {
            setShowModal(false)
            } }/>
        </div>
        

    )
}

export default Configuracion