import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../ListaNotebook/ListaNotebook.css'
import BaseDatosAreas from '../../../Mocks/BaseDatosAreas';
import BaseDatosNotebook from '../../../Mocks/BaseDatosNotebook';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const ListaNotebook = () =>{
  {/**Modal de Btn para Info */}
  const [show, setShow] = useState(false);
  const [selectDataNtb, setSelectDataNtb] = useState(null);

 {/**Abrir el modal de info adicional */}
 const handleShow = (ntb) => {
  setSelectDataNtb(ntb)
  setShow(true);
  }

  {/**Cerrar el modal de info adicional*/}
  const handleClose = () => {
    setShow(false);
    setSelectDataNtb(null)
  }

  {/**Boton para volver al menu anterior */}
  const navigate = useNavigate('');

  const btnVolver = () =>{
    navigate('/HomeListaElementos')
  }

    return(
        <>
        <div>
            <h3 className='titleNtb'>Listado de Notebook</h3>
            <div className='searchListNtb'>
              <Row className="g-2">
                <Col md>
                  <FloatingLabel controlId="floatingInputGrid" label="Usuario">
                    <Form.Control type="text" />
                  </FloatingLabel>
                </Col>
                <Col md>
                  <FloatingLabel
                    controlId="floatingSelectGrid"
                    label="Área"
                  >
                    <Form.Select aria-label="Floating label select example">
                      {BaseDatosAreas.map((sect) =>(
                      <option>{sect.area}</option>
                    ))}
                    </Form.Select>
                  </FloatingLabel>
                </Col>
              </Row>

              <Button variant="success" className='btnSearchNtb'>Buscar</Button>
              <Button variant="success" className='btnResetTable'>Restablecer</Button>
              <Button variant="success" className='btnVolverMenu' onClick={btnVolver}>Volver</Button>
            </div>

            <div className='tablaListNtb'>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Notebook</th>
                    <th>Usuario</th>
                    <th>Contraseña</th>
                    <th>Área</th>
                    <th>Ver Más</th>
                  </tr>
                </thead>
                {BaseDatosNotebook.map((ntb)=>(
                <tbody>
                  <tr key={ntb.id}>
                    <td>{ntb.equipo}</td>
                    <td>{ntb.user}</td>
                    <td>{ntb.password}</td>
                    <td>{ntb.area}</td>
                    <td><Button variant="info" onClick={() => handleShow(ntb)}>Ver Más</Button></td>
                  </tr>
                </tbody>
              ))}
              </Table>
            </div>

        {/**Modal de Más Informacion */}
          <div className='modalInfoNtb'>
          <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>Detalles de Notebook</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                <p><b>ID:</b> {selectDataNtb?.id ||"Sin Datos"}</p>
                <p><b>Usuario de Notebook:</b> {selectDataNtb?.user ||"Sin Datos"}</p>
                <p><b>Contraseña:</b> {selectDataNtb?.password ||"Sin Datos"}</p>
                <p><b>Área:</b> {selectDataNtb?.area ||"Sin Datos"}</p>
                <p><b>Equipo:</b> {selectDataNtb?.equipo ||"Sin Datos"}</p>
                <p><b>Modelo:</b> {selectDataNtb?.modelo ||"Sin Datos"}</p>
                <p><b>Caracteristicas:</b> {selectDataNtb?.caracteristicas ||"Sin Datos"}</p>
                <p><b>VPN:</b> {selectDataNtb?.vpn ||"Sin Datos"}</p>
                <p><b>Nro de Serie:</b> {selectDataNtb?.nroSerie ||"Sin Datos"}</p>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>
          </div>
        </div>
        </>
    )
}

export default ListaNotebook;