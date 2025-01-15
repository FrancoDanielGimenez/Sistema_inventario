import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import BaseDatosImpresoras from '../../../Mocks/BaseDatosImpresoras';
import BaseDatosAreas from '../../../Mocks/BaseDatosAreas';
import '../ListadoImpresoras/ListadoImpresoras.css'
import { useNavigate } from 'react-router-dom';

const ListaImpresora = () =>{

const navigate = useNavigate()

/**Boton para volver al menu anterior */
const btnVolver = () => {
  navigate('/HomeListaElementos')
};

    return(
        <>
        <div>
          <h1>Listado de Impresoras a cargo</h1>
          <div className='searchListPrinter'>
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
                  {BaseDatosAreas.map((sector)=>(
                  <option value="1">{sector.area}</option>
                ))}
                </Form.Select>
              </FloatingLabel>
            </Col>
          </Row>

          <Button variant="success" className='btnSearchPrinter'>Buscar</Button>
          <Button variant="success" className='btnResetPrinter'>Restablecer</Button>
          <Button variant="success" className='btnVolver' onClick={btnVolver} >Volver</Button>
          </div>

          <div className='tablaListPrinter'>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>Modelo</th>
                <th>Área</th>
                <th>IP / Usb</th>
                <th>Usuario</th>
              </tr>
            </thead>
            <tbody>
              {BaseDatosImpresoras.map((printer)=>(
              <tr>
                <td>{printer.idPrinter}</td>
                <td>{printer.modelo}</td>
                <td>{printer.area}</td>
                <td>{printer.conector}</td>
                <td>{printer.usuario}</td>
              </tr>
              ))}
            </tbody>
          </Table>
          </div>
        </div>
        </>
    )
}

export default ListaImpresora;