import TarjetaNewElementos from "../../../components/TarjetaNewElementos";
import '../../../styles/Tarjeta.css'

const HomeCargaElementos = () =>{
    return(
        <>
        <div>
          <h1>Menu de Elementos para cargar</h1>
          <div className="conteinerTarjeta">
            <TarjetaNewElementos/>
          </div>
        </div>
        </>
    )
}

export default HomeCargaElementos;