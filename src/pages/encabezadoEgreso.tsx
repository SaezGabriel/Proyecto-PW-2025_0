interface EncabezadoProps {
    titulo : string 
}

const Encabezado =(props : EncabezadoProps) => {
    console.log("Titulo" , props.titulo)
    return <h1> {props.titulo} </h1>

}

export default Encabezado