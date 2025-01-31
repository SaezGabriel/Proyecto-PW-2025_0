import TablaEgresos from "./TablaEgresos"
import AgregarEgresoModal from "./AgregarEgresoModal"
import { useState } from "react"
import EditarGastoModal from "./EditarGastoModal";
import EliminarEgresoModal from "./EliminarEgresoModal";

interface elementosTabla {
  fecha : string;
  categoria : string;
  descripcion : string;
  monto : string;
  recursivo : boolean;
}

const PaginaEgresos = () => {
    const [showModalAgregar, setShowModalAgregar] = useState<boolean>(false)

    const [showModalEditar, setShowModalEditar] = useState<boolean>(false)
    const [elementoEditar, setElementoEditar] = useState<elementosTabla>({fecha : "", categoria : "", descripcion : "", monto : "", recursivo : false})

    const [showModalEliminar, setShowModalEliminar] = useState<boolean>(false)

    const tabla : elementosTabla[] = [
        { fecha : "12/12/2024", categoria : "Ocio", descripcion : "La Niebla, libro de Steven King", monto : "S/. 29.99", recursivo : false },
        { fecha : "02/12/2024", categoria : "Servicios", descripcion : "Servicio de Luz", monto : "S/. 229.99", recursivo : true },
        { fecha : "02/12/2024", categoria : "Servicios", descripcion : "Servicio del agua", monto : "S/. 129.99", recursivo : true },
        { fecha : "05/12/2024", categoria : "Servicios", descripcion : "Movistar", monto : "S/. 169.99", recursivo : true },
        { fecha : "05/12/2024", categoria : "Alimentación", descripcion : "Compras del mes", monto : "S/. 369.99", recursivo : true }
    ]

    const editarElementoTabla = (index : number) => {
        setElementoEditar(tabla[index])
        setShowModalEditar(true)
    }

    const agregarElementoTabla = (elem : elementosTabla) => {
        tabla.push(elem)
    }

    return <>
        <TablaEgresos listaElementos={tabla} openModalAgregar={() => { setShowModalAgregar(true); } } openModalEditar={(index: number) => { editarElementoTabla(index); } } openModalEliminar={(index : number) => {setShowModalEliminar(true)}}/>
        <AgregarEgresoModal showModal={showModalAgregar} closeModal={() => {setShowModalAgregar(false)}} />
        <EditarGastoModal showModal={showModalEditar} closeModal={() => {setShowModalEditar(false)}} elemento={elementoEditar} />
        <EliminarEgresoModal showModal={showModalEliminar} closeModal={() => {setShowModalEliminar(false)}} />
    </>
}

export default PaginaEgresos