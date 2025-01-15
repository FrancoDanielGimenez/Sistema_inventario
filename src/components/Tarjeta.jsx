import { useNavigate } from "react-router-dom";
import '../styles/Tarjeta.css';
import HomeCardsElementos from '../Mocks/HomeCardsElementos.js';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Tarjeta = () =>{

  const navigate = useNavigate();

  const btnNavegacion = (route) =>{
    navigate(route);
  }

    return(
        <>
        <div>
          {HomeCardsElementos.map((cards)=>(
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <div className="tarjetaIcono"><i className={cards.icon}></i></div>
              <Card.Title>{cards.title}</Card.Title>
              <Card.Text>
                {cards.descrip}
              </Card.Text>
              <Button className="tarjetaBtn" onClick={()=>btnNavegacion(cards.route)}>Ingresar</Button>
            </Card.Body>
          </Card>
          ))}
        </div>
        </>
    )
}

export default Tarjeta;