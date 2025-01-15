import '../HomeListaElementos/HomeListaElementos.css';
import Tarjeta from "../../../components/Tarjeta";

const HomeListaElementos = () =>{
    return(
        <>
        <div>
            <h1>Listado de Elementos Coop</h1>
            <div className='conteinerTarjeta'>
              <div><Tarjeta/></div>
            </div> 
        </div>  
        </>
    )
}

export default HomeListaElementos;  