import '../Home/Home.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faAddressBook, faFilePen } from '@fortawesome/free-solid-svg-icons';

const Home = () =>{
    return(
        <>
        <div className='conteinerCards'>
          <h3>Menu Principal</h3>
            <div>
              <Card style={{ width: '18rem' }}>
                <FontAwesomeIcon icon={faList} className='cardsIcono' />
                <Card.Body>
                    <Card.Title>Listado de Elementos</Card.Title>
                    <NavLink to='/HomeListaElementos'><Button variant="primary">Ingresar</Button></NavLink>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card style={{ width: '18rem' }}>
                <FontAwesomeIcon icon={faFilePen} className='cardsIcono' />
                <Card.Body>
                    <Card.Title>Carga de Elementos</Card.Title>
                    <NavLink><Button variant="primary">Ingresar</Button></NavLink>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card style={{ width: '18rem' }}>
              <FontAwesomeIcon icon={faAddressBook} className='cardsIcono' />
                <Card.Body>
                    <Card.Title>Directorio</Card.Title>
                    <NavLink to='/TelefonosInternos'><Button variant="primary">Ingresar</Button></NavLink>
                </Card.Body>
              </Card>
            </div>
        </div>
        </>
)}

export default Home;