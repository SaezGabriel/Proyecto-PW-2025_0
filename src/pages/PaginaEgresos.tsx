import Presupuesto from "./TablaEgresos"
import AgregarEgresoModal from "./AgregarEgresoModal"
import { useState } from "react"

interface elementosTabla {
    fecha : string;
    categoria : string;
    descripcion : string;
    monto : string;
}

const PaginaEgresos = () => {
    const [showModal, setShowModal] = useState<boolean>(false)
    
    const tabla : elementosTabla[] = [{fecha : "2024-12-12", categoria : "Ocio", descripcion : "La niebla", monto : "S/. 29.99"}]

    const agregarElementoTabla = (elem : elementosTabla) => {
        tabla.push(elem)
    }

    return <>
        <Presupuesto listaElementos={tabla} openModal={() => {setShowModal(true)}} />
        <AgregarEgresoModal showModal={showModal} closeModal={() => {setShowModal(false)}} />
    </>
}

export default PaginaEgresos