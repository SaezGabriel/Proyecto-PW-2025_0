import Usuario from "./Tabla_usuarios_admin"

import FiltrarRol from "./FiltrarRol"
import { useState } from "react"
interface elementosTabla {
  fecha : string;
  categoria : string;
  descripcion : string;
  monto : string;
}
const UsuariosAdmin = () => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const tabla : elementosTabla[] = [{fecha : "2024-12-12", categoria : "Ocio", descripcion : "La niebla", monto : "S/. 29.99"}]

  const agregarElementoTabla = (elem : elementosTabla) => {
      tabla.push(elem)
  }
  return <>
        <Usuario listaElementos={tabla} openModal={() => {setShowModal(true)}} />
        <FiltrarRol showModal={showModal} closeModal={() => {setShowModal(false)}} />
    </>
};

export default UsuariosAdmin;
