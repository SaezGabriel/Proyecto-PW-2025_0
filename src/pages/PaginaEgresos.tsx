import TablaEgresos from "./TablaEgresos"
import AgregarEgresoModal from "./AgregarEgresoModal"
import { useEffect, useState } from "react"
import EditarGastoModal from "./EditarGastoModal";
import EliminarEgresoModal from "./EliminarEgresoModal";
import FiltrarEgresoModal from "./FiltrarEgresoModal";
import ExportarEgresoModal from "./ExportarEgresoModal";
import AlarmaPresupuesto from "./AlarmaExcesoPresupuesto_usuario";
import exportFromJSON from 'export-from-json'
import { jsPDF } from "jspdf";


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

export interface elementoAgregar {
    UsuarioId : number;
    monto : number;
    fecha : Date;
    descripcion : string;
    recursivo : boolean;
    categoriaId : number;
}

export interface Categoria {
    id : number
    nombre : string
}

interface egresosModal {
    UsuarioId : number;
}

const URL_BACKEND = import.meta.env.VITE_URL_BACKEND || "http://localhost:3000"

const PaginaEgresos = (props : egresosModal) => {
    const [showModalAgregar, setShowModalAgregar] = useState<boolean>(false)
    const [showModalEliminar, setShowModalEliminar] = useState<boolean>(false)
    const [showModalFiltrar, setShowModalFiltrar] = useState<boolean>(false)
    const [showModalExportar, setShowModalExportar] = useState<boolean>(false)
    const [showModalAlarma, setShowModalAlarma] = useState<boolean>(false)
    const [showModalEditar, setShowModalEditar] = useState<boolean>(false)
    const [egresos, setEgresos] = useState<elementosTabla[]>([])
    const usuarioId = props.UsuarioId
    const [elementoEditar, setElementoEditar] = useState<elementosTabla>({id:0, UsuarioId: 1, monto:29.99, fecha:"", descripcion: "",  recursivo: false, categoriaId: 1,Categoria: {nombre : ""}})
    
    const [idEliminar, setIdEliminar] = useState<number>(0)


    const httpObtenerEgresos = async (UsuarioId : number) => {
        const url = URL_BACKEND + "/egresos/todo/" + UsuarioId
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
        console.log("UsuarioId: ",usuarioId)
        httpObtenerEgresos(usuarioId)
    },[])

    const httpBuscarEgreso = async (id: number) => {
        try {
            const url = URL_BACKEND + "/egresos/" + id
            const resp = await fetch(url)
            const data = await resp.json();
    
            if (data.msg == "") { 
                console.log("Egreso encontrado: ", data.egreso)
                const nuevoElemento = {
                    ...data.egreso
                }
                setElementoEditar(nuevoElemento)
                setShowModalEditar(true)
            } else {
                console.error(`No se encontró el egreso con ID: ${id}`)
            }
        } catch (error) {
            console.error(`Error al obtener el egreso`)
        }
    }

    const httpAgregarEgreso = async (nuevoEgreso : elementoAgregar) => {
        console.log(nuevoEgreso)
        const url = URL_BACKEND + "/egresos"
        const resp = await fetch(url, {
            method : "POST",
            body : JSON.stringify({
                UsuarioId : usuarioId,
                monto : nuevoEgreso.monto,
                fecha : nuevoEgreso.fecha,
                descripcion : nuevoEgreso.descripcion,
                recurrente : nuevoEgreso.recursivo,
                categoriaId : nuevoEgreso.categoriaId
            }),
            headers : {
                "Content-Type": "application/json",
            }
        })
        const data = await resp.json()
        if (data.msg == "") {
            await httpObtenerEgresos(usuarioId)
            setShowModalAgregar(false)
        }
    }

    const httpEditarEgreso = async (nuevoEgreso : elementoAgregar, id : number) => {
        console.log(nuevoEgreso)
        const url = URL_BACKEND + "/egresos/editar"
        const resp = await fetch(url, {
            method : "POST",
            body : JSON.stringify({
                id : id,
                monto : nuevoEgreso.monto,
                fecha : nuevoEgreso.fecha,
                descripcion : nuevoEgreso.descripcion,
                recurrente : nuevoEgreso.recursivo,
                categoriaId : nuevoEgreso.categoriaId
            }),
            headers : {
                "Content-Type": "application/json",
            }
        })
        const data = await resp.json()
        if (data.msg == "") {
            await httpObtenerEgresos(usuarioId)
            setShowModalEditar(false)
        }
    }

    const httpEliminarEgreso = async (id : number) => {
        const url = URL_BACKEND + "/egresos?id=" + id
        const resp = await fetch(url, {
            method : "DELETE"
        })
        const data = await resp.json()
        if (data.msg == "") {
            httpObtenerEgresos(usuarioId)
            setShowModalEliminar(false)
        }else {
            console.error(`Error al eliminar un egreso: ${data.msg}`)
        }
    }
    const exportarLista_csv = () =>{

        const data = egresos
        const fileName = 'Egresos'
        const exportType =  exportFromJSON.types.csv
        exportFromJSON({ data, fileName, exportType })
    }
    const exportarLista_pdf = () =>{
        
        var doc = new jsPDF();
        egresos.forEach(function(egreso, i){
            doc.text(20, 10 + (i * 10),
                "Categoria: " + egreso.descripcion +
                "Descripcion: " + egreso.monto +
                "Fecha: "+ egreso.fecha +
                "¿Recurrente?: " + egreso.recursivo);
        });
        doc.save('Gastos.pdf');

    }


    return <>
        <TablaEgresos listaElementos={egresos} openModalFiltrar={() => {setShowModalFiltrar(true)}} openModalAgregar={() => { setShowModalAgregar(true); } } 
            openModalEditar={(index: number) => { httpBuscarEgreso(index); }} 
            openModalEliminar={(index : number) => { 
                setIdEliminar(index)
                setShowModalEliminar(true) 
            }} 
            openModalExportar={() => { setShowModalExportar(true); }} />
        <AgregarEgresoModal showModal={showModalAgregar} closeModal={() => {setShowModalAgregar(false)}} 
            handleAgregarEgreso={(elem : elementoAgregar) => {
                httpAgregarEgreso(elem)
            }} />
        <EditarGastoModal showModal={showModalEditar} closeModal={() => {setShowModalEditar(false)}} elemento={elementoEditar} 
            handleEditarEgreso={(elem : elementoAgregar , id : number) => {
                httpEditarEgreso(elem, id)
            }} />
        <EliminarEgresoModal showModal={showModalEliminar} idEliminar={idEliminar} 
            eliminarElem={(id : number) => {httpEliminarEgreso(id)}} 
            closeModal={() => {setShowModalEliminar(false)}} />
        <FiltrarEgresoModal showModal={showModalFiltrar} closeModal={() => {setShowModalFiltrar(false)}}/>
        <ExportarEgresoModal showModal ={showModalExportar} closeModal={()=>{setShowModalExportar(false)}}
        exportarLista_csv={exportarLista_csv}
        exportarLista_pdf={exportarLista_pdf}/>
    
        

        
        <button className="btn btn-primary m-4" onClick={()=>{
                                setShowModalAlarma(true)
                            }}>Alarma</button>
        <AlarmaPresupuesto showModal={ showModalAlarma } 
            closeModal={ () => {
                setShowModalAlarma(false)
            }}/>
    </>
}

export default PaginaEgresos