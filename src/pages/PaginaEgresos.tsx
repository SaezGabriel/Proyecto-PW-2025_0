import TablaEgresos from "./TablaEgresos"
import AgregarEgresoModal from "./AgregarEgresoModal"
import { useEffect, useState } from "react"
import EditarGastoModal from "./EditarGastoModal";
import EliminarEgresoModal from "./EliminarEgresoModal";
import FiltrarEgresoModal from "./FiltrarEgresoModal";
import ExportarEgresoModal from "./ExportarEgresoModal";
import AlarmaPresupuesto from "./AlarmaExcesoPresupuesto_usuario"

export interface elementosTabla {
    id : number;
    UsuarioId : number;
    monto : number;
    fecha : string;
    descripcion : string;
    recursivo : boolean;
    categoriaId : number;
    Categoria : {
        nombre : string
    };
}

export interface Categoria {
    id : number
    nombre : string
}

const URL_BACKEND = import.meta.env.VITE_URL_BACKEND || "http://localhost:5000"

const PaginaEgresos = () => {
    const [showModalAgregar, setShowModalAgregar] = useState<boolean>(false)
    const [showModalEliminar, setShowModalEliminar] = useState<boolean>(false)
    const [showModalFiltrar, setShowModalFiltrar] = useState<boolean>(false)
    const [showModalExportar, setShowModalExportar] = useState<boolean>(false)
    const [showModalAlarma, setShowModalAlarma] = useState<boolean>(false)
    const [showModalEditar, setShowModalEditar] = useState<boolean>(false)
    const [egresos, setEgresos] = useState<elementosTabla[]>([])
    const [categorias, setCategorias] = useState<Categoria[]>([])


    const [elementoEditar, setElementoEditar] = useState<elementosTabla>({id:0, UsuarioId: 1, monto:29.99, fecha:"", descripcion: "",  recursivo: false, categoriaId: 1,Categoria: {nombre : ""}})
    /*const tabla : elementosTabla[] = [
        { fecha : "12/12/2024", categoria : "Ocio", descripcion : "La Niebla, libro de Steven King", monto : "S/. 29.99", recursivo : false },
        { fecha : "02/12/2024", categoria : "Servicios", descripcion : "Servicio de Luz", monto : "S/. 229.99", recursivo : true },
        { fecha : "02/12/2024", categoria : "Servicios", descripcion : "Servicio del agua", monto : "S/. 129.99", recursivo : true },
        { fecha : "05/12/2024", categoria : "Servicios", descripcion : "Movistar", monto : "S/. 169.99", recursivo : true },
        { fecha : "05/12/2024", categoria : "Alimentación", descripcion : "Compras del mes", monto : "S/. 369.99", recursivo : true }
    ]*/

    const httpObtenerEgresos = async () => {
        const url = URL_BACKEND + "/egresos"
        const resp = await fetch(url)
        const data = await resp.json()
        if (data.msg == "") {
            const listaEgresos = data.egresos
            setEgresos(listaEgresos)
            console.log(listaEgresos)
        }else {
            console.error(`Error al obtener Egresos: ${data.msg}`)
        }
    }

    useEffect( ()=> {
        httpObtenerEgresos()
    },[])

    const editarElementoTabla = (index : number) => {
        setShowModalEditar(true)
    }

    const agregarElementoTabla = (elem : elementosTabla) => {
        
    }

    return <>
        <TablaEgresos listaElementos={egresos} openModalFiltrar={() => {setShowModalFiltrar(true)}} openModalAgregar={() => { setShowModalAgregar(true); } } openModalEditar={(index: number) => { editarElementoTabla(index); } } openModalEliminar={(index : number) => {setShowModalEliminar(true)}} openModalExportar={() => { setShowModalExportar(true); } } />
        <AgregarEgresoModal showModal={showModalAgregar} closeModal={() => {setShowModalAgregar(false)}} />
        <EditarGastoModal showModal={showModalEditar} closeModal={() => {setShowModalEditar(false)}} elemento={elementoEditar} />
        <EliminarEgresoModal showModal={showModalEliminar} closeModal={() => {setShowModalEliminar(false)}} />
        <FiltrarEgresoModal showModal={showModalFiltrar} closeModal={() => {setShowModalFiltrar(false)}}/>
        <ExportarEgresoModal showModal ={showModalExportar} closeModal={()=>{setShowModalExportar(false)}}/> 
        
        <button className="btn btn-primary m-4" onClick={()=>{
                                setShowModalAlarma(true)
                            }}>Alarma</button>
        <AlarmaPresupuesto showModal={ showModalAlarma } 
            closeModal={ () => {
            setShowModalAlarma(false)
            } }/>
    </>
}

export default PaginaEgresos