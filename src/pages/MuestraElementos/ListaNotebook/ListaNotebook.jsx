import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import '../ListaNotebook/ListaNotebook.css'
import BaseDatosAreas from '../../../Mocks/BaseDatosAreas';
import { useNavigate } from 'react-router-dom';

const ListaNotebook = () =>{

  {/**Boton para volver al menu anterior */}
  const navigate = useNavigate('');

  const btnVolver = () =>{
    navigate('/HomeListaElementos')
  }

    return(
        <>
        <div>
            <h3>Listado de Notebook</h3>
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
                      {BaseDatosAreas.map((sector) =>(
                      <option>{sector.area}</option>
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
                    <th>ID</th>
                    <th>Usuario</th>
                    <th>Contraseña</th>
                    <th>Área</th>
                    <th>Ver Más</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td><Button variant="info">Ver Más</Button></td>
                  </tr>
                </tbody>
              </Table>
            </div>

        </div>
        </>
    )
}

export default ListaNotebook;