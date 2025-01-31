import TablaEgresos from "./TablaEgresos"
import AgregarEgresoModal from "./AgregarEgresoModal"
import { useState } from "react"

interface elementosTabla {
    fecha : string;
    categoria : string;
    descripcion : string;
    monto : string;
    recursivo : boolean;
}

const PaginaEgresos = () => {
    const [showModal, setShowModal] = useState<boolean>(false)
    
    const tabla : elementosTabla[] = [
        { fecha : "12/12/2024", categoria : "Ocio", descripcion : "La Niebla, libro de Steven King", monto : "S/. 29.99", recursivo : false },
        { fecha : "02/12/2024", categoria : "Servicios", descripcion : "Servicio de Luz", monto : "S/. 229.99", recursivo : true },
        { fecha : "02/12/2024", categoria : "Servicios", descripcion : "Servicio del agua", monto : "S/. 129.99", recursivo : true },
        { fecha : "05/12/2024", categoria : "Servicios", descripcion : "Movistar", monto : "S/. 169.99", recursivo : true },
        { fecha : "05/12/2024", categoria : "Alimentación", descripcion : "Compras del mes", monto : "S/. 369.99", recursivo : true }
    ]

    const agregarElementoTabla = (elem : elementosTabla) => {
        tabla.push(elem)
    }

    return <>
        <TablaEgresos listaElementos={tabla} openModalAgregar={() => {setShowModal(true)}} />
        <AgregarEgresoModal showModal={showModal} closeModal={() => {setShowModal(false)}} />
    </>
}

export default PaginaEgresos