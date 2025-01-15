import BaseDatosPcEscritorio from '../../../Mocks/BaseDatosPcEscritorio';
import BaseDatosAreas from '../../../Mocks/BaseDatosAreas';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import '../ListadoPcEscritorio/ListaPcEscritorio.css';
import { useNavigate } from 'react-router-dom';

const ListaPcEscritorio = () =>{

  const navigate = useNavigate()

  /**Funcion de Btn Volver para regresar menu anterior */
  const btnVolverMenu = () => {
    navigate('/HomeListaElementos')
  }

    return(
        <>
        <div>
          <h1>Listado de Pc de Escritorio</h1>
          <div className='searchPcEscritorio'>
            <Row className="g-2">
              <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="Nombre de PC">
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
                    <option>{sector.area}</option>
                  ))}
                  </Form.Select>
                </FloatingLabel>
              </Col>
            </Row>
            <Button variant="success" className='btnSearchPc'>Buscar</Button>
            <Button variant="success" className='btnResetPc'>Restablecer</Button>
            <Button variant="success" className='btnVolver' onClick={btnVolverMenu} >Volver</Button>
          </div>

          <div className='tablaPcEscritorio'>
            <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nombre PC</th>
                    <th>Usuario Pc</th>
                    <th>Área</th>
                    <th>Caracteristicas CPU</th>
                    <th>Caracteristica Monitor</th>
                  </tr>
                </thead>
                <tbody>
                  {BaseDatosPcEscritorio.map((userPc)=>(
                  <tr key={userPc.id}>
                    <td>{userPc.id}</td>
                    <td>{userPc.nombrePc}</td>
                    <td>{userPc.usuarioPc}</td>
                    <td>{userPc.area}</td>
                    <td>{userPc.caracteristicaCpu}</td>
                    <td>{userPc.caracteristicaMonitor}</td>
                  </tr>
                  ))}
                </tbody>
            </Table>
          </div>

        </div>
        </>
    )
}

export default ListaPcEscritorio;