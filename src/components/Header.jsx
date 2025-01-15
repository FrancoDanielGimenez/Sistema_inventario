import '../styles/Header.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = () =>{
    return(
        <>
        <div className='conteinerHeader'>
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/"><img src="/src/img/logoCoopIcono.ico" height={50} width={50}/><b>Sistemas Coop</b></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                {/* <Navbar.Text>
                    Signed in as: <a href="#login">Mark Otto</a>
                </Navbar.Text> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
        </>
    )
}

export default Header;