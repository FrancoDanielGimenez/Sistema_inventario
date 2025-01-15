import '../ListadoVpn/ListaVpn.css';
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import BaseDatosVpn from '../../../Mocks/BaseDatosVpn';
import BaseDatosAreas from '../../../Mocks/BaseDatosAreas';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ListaVpn = () =>{

  {/**Boton para volver al menu principal */}
  const navigate = useNavigate('')

  const btnVolverMenu = () =>{
    navigate('/HomeListaElementos')
  }


  /**Input para Filtar por usuarioVPN */
  const [searchUsuarioVpn, setSearchUsuarioVpn] =useState("")

  const filterUsuario = BaseDatosVpn.filter((vpn) =>
    vpn.usuarioVpn.toLowerCase().includes(searchUsuarioVpn.toLowerCase())
  );

    return(
        <>
        <div>
          <h1>Listado de VPN</h1>
          <div className='searchVpn'>
            <Row className="g-2">
              <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="Cliente VPN">
                  <Form.Control type="text" placeholder="name@example.com" 
                  value={searchUsuarioVpn} onChange={(e) => setSearchUsuarioVpn(e.target.value)} />
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
            <Button variant="success" className='btnSearchVpn'>Buscar</Button>
            <Button variant="success" className='btnResetVpn'>Restablecer</Button>
            <Button variant="success" className='btnVolverMenu' onClick={btnVolverMenu}>Volver</Button>
          </div>

          <div className='tablaVpn'>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Usuario</th>
                  <th>Área</th>
                  <th>Cliente VPN</th>
                  <th>Observacion</th>
                </tr>
              </thead>
              {filterUsuario.map((vpn)=>(
              <tbody>
                <tr key={vpn.id}>
                  <td>{vpn.id}</td>
                  <td>{vpn.usuarioVpn}</td>
                  <td>{vpn.area}</td>
                  <td>{vpn.clienteVpn}</td>
                  <td>{vpn.observacion}</td>
                </tr>
              </tbody>
              ))}
            </Table>
          </div>
        </div>
        </>
    )
}

export default ListaVpn;