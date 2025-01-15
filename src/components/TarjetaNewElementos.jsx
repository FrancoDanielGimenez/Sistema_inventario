import { useNavigate } from "react-router-dom";
import '../styles/Tarjeta.css';
import HomeNewCardsElementos from '../Mocks/HomeNewCardsElementos';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const TarjetaNewElementos = () =>{

  const navigate = useNavigate();

  const btnNavegacion = (route) =>{
    navigate(route);
  }

    return(
        <>
        <div>
          {HomeNewCardsElementos.map((cards)=>(
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

export default TarjetaNewElementos;