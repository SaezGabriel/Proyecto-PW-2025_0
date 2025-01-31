import TablaUsuario from "./Tabla_usuarios_admin"

import FiltrarRol from "./FiltrarRol"
import { useState } from "react"
interface Usuarios {
  nombre : string;
  correo : string;
  rol : 'Admin' | 'User';
}
const UsuariosAdmin = () => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const tabla : Usuarios[] = [
    { nombre : "A", correo : "a@gmail.com", rol : 'Admin'},
    { nombre : "B", correo : "b@gmail.com", rol : 'Admin'},
    { nombre : "C", correo : "c@gmail.com", rol : 'Admin'}]

  const agregarElementoTabla = (elem : Usuarios) => {
      tabla.push(elem)
  }
  return <>
        <TablaUsuario listaElementos={tabla} openModal={() => {setShowModal(true)}} />
        <FiltrarRol showModal={showModal} closeModal={() => {setShowModal(false)}} />
    </>
};

export default UsuariosAdmin;
