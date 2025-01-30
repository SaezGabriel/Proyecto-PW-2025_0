import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";


const UsuariosAdmin = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      {/* Botón fijo en la parte derecha */}
      <div className="container">
        <div className="d-flex flex-row-reverse">
          <div className="p-3 col-12 row ">
            <div className="col-8"></div>
            <button
              type="button"  
              onClick={() => setShow(true)} 
              className="col-1 btn btn-primary"
            >
              Filtrar
            </button>
          </div>
        </div>
      </div>
      {/* Modal alineado a la derecha usando Bootstrap */}
      <Modal 
        show={show} 
        onHide={() => setShow(false)} 
        className="modal fade "
        dialogClassName="modal-dialog modal-dialog-end"
      >
        <Modal.Header closeButton>
          <Modal.Title className="ps-3 text-center w-100">Filtrar por rol de usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-4">
          <Form>
            <div className="row mb-4 mt-3 justify-content-center">
              <div className="col-md-2 text-end">
                <Form.Label className="fw-bold fs-5">Rol</Form.Label>
              </div>
              <div className="col-md-7">
                <Form.Select id="rol" name="rol" className="form-select">
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
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
