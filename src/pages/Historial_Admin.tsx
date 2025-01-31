import TablaHistorial from "./TablaHistorial";

interface elementosTabla {
    id : string;
    nombre : string;
    correo : string;
    fecha : string;
    hora : string;
    accion : string;
}


const Historial = () => {

    const tabla : elementosTabla[] = [{
        id : "001",
        nombre : "Jessica",
        correo : "jess@taxes.com",
        fecha : "12/12/2024",
        hora : "17:50",
        accion : "Borrar"
    }]
    return <div>
        <TablaHistorial listaElementos={tabla}/>
    </div>
}

export default Historial