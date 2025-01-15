import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import '../NewImpresora/CargaNewImpresora.css';
import BaseDatosAreas from '../../../Mocks/BaseDatosAreas';

const CargaNewImpresora = () =>{
    return(
      <>
      <div>
          <h1>Form</h1>
          <div className='conteinerFormNewImpr'>
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label><b>Usuario</b></Form.Label>
                  <Form.Control type="text" placeholder="Ingrese un nuevo Usuario" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label><b>Area</b></Form.Label>
                  <Form.Select defaultValue="Choose...">
                    {BaseDatosAreas.map((sector)=>(
                    <option>{sector.area}</option>
                  ))}
                  </Form.Select>
                </Form.Group>
                
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label><b>Modelo</b></Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                  </Form.Select>
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label><b>ID</b></Form.Label>
                  <Form.Control placeholder='Ingrese un numero entero' />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label><b>Conector</b></Form.Label>
                  <Form.Control placeholder="Usb / 192.168.170.30" />
                </Form.Group>
              </Row>

              <Button variant="primary" type="submit">
                Crear
              </Button>
            </Form>
          </div>
      </div>
      </>
    )
}

export default CargaNewImpresora;