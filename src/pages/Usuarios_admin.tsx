import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

// Definir el tipo de usuario
interface Usuario {
  nombre: string;
  correo: string;
  rol: 'Admin' | 'User'; // El rol puede ser 'Admin' o 'User'
}

// Lista de usuarios
const usuarios: Usuario[] = [
  { nombre: 'A', correo: 'a@mail.com', rol: 'Admin' },
  { nombre: 'B', correo: 'b@mail.com', rol: 'Admin' },
  { nombre: 'C', correo: 'c@mail.com', rol: 'Admin' },
  { nombre: 'D', correo: 'd@mail.com', rol: 'User' },
  { nombre: 'E', correo: 'e@mail.com', rol: 'User' },
];


const UsuariosAdmin = () => {
  const [show, setShow] = useState(false);
  const [filtroRol, setFiltroRol] = useState<string | null>(null);

  const usuariosFiltrados = filtroRol
    ? usuarios.filter((usuario) => usuario.rol === filtroRol)
    : usuarios;



  return (
    <>
    <div class="container">
    <div class = "row">
      <div class="col-md-offset-1 col-md-10">
        <div class="panel">
          <h2>Lista de Usuarios</h2>
          <div class="panel-body table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Correo</th>
                  <th>Rol</th>
                </tr>
              </thead>
              <tbody>
                {usuariosFiltrados.map((usuario, index) => (
                <tr key={index}>
                  <td>{usuario.nombre}</td>
                  <td>{usuario.correo}</td>
                  <td>{usuario.rol}</td>
                </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
      {/* Botón fijo en la parte derecha */}
      <Button 
        variant="primary" 
        onClick={() => setShow(true)} 
        className="position-fixed top-50 end-0 me-3"
      >
        Filtrar
      </Button>

      {/* Modal alineado a la derecha usando Bootstrap */}
      <Modal 
        show={show} 
        onHide={() => setShow(false)} 
        className="modal fade "
        dialogClassName="modal-dialog modal-dialog-end"
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-center w-100">Filtrar por rol de usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-4">
          <Form>
            <div className="row mb-4 mt-3 justify-content-center">
              <div className="col-md-3 text-end">
                <Form.Label className="fw-bold fs-5">Rol</Form.Label>
              </div>
              <div className="col-md-7">
                <Form.Select id="rol"
                 name="rol" 
                 className="form-select"
                  onChange={(e) => setFiltroRol(e.target.value)}
                >
                  <option value="">Todos</option>
                  <option value="Admin">Admin</option>
                  <option value="User">User</option>
                </Form.Select>
              </div>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button 
            variant="secondary" 
            onClick={() => setShow(false)}
            className="px-4 py-2 fs-5 me-4"
          >
            Cancelar
          </Button>
          <Button 
            variant="primary" 
            className="px-4 py-2 fs-5"
          >
            Aceptar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UsuariosAdmin;
