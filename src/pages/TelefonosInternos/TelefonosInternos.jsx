import '../TelefonosInternos/TelefonosInternos.css';
import BaseDatosTelefonoInt from '../../Mocks/BaseDatosTelefonoInt';
import BaseDatosAreas from '../../Mocks/BaseDatosAreas';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'


const TelefonosInternos = () =>{
    return(
        <>
        <div>
          <h1>Telefonos Internos de la Cooperativa</h1>
          <div>
          <Row className="g-2">
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Usuario">
                <Form.Control type="text"/>
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel
                controlId="floatingSelectGrid"
                label="Área"
              >
                <Form.Select aria-label="Floating label select example">
                  {BaseDatosAreas.map((sector)=>(
                  <option>{sector.area}</option>
                  ))}
                </Form.Select>
              </FloatingLabel>
            </Col>
          </Row>
          <Button variant="success"><FontAwesomeIcon icon={faMagnifyingGlass} /> Buscar</Button>
          </div>

          {/**Tabla de datos */}
          <div>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Usuario</th>
                  <th>Área</th>
                  <th>Interno</th>
                  <th>Correo</th>
                </tr>
              </thead>
              <tbody>
                {BaseDatosTelefonoInt.map((user)=>(
                <tr>
                  <td>{user.usuario}</td>
                  <td>{user.area}</td>
                  <td>{user.interno}</td>
                  <td>{user.correo}</td>
                </tr>
                ))}
              </tbody>
            </Table>
          </div>

        </div>
        </>
    )
}

export default TelefonosInternos;