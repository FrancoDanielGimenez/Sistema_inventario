import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home';
import ListaVpn from './pages/MuestraElementos/ListadoVpn/ListaVpn';
import ListaPcEscritorio from './pages/MuestraElementos/ListadoPcEscritorio/ListaPcEscritorio';
import ListaNotebook from './pages/MuestraElementos/ListaNotebook/ListaNotebook';
import Header from '../src/components/Header';
import HomeListaElementos from './pages/MuestraElementos/HomeListaElementos/HomeListaElementos';
import ListaImpresora from './pages/MuestraElementos/ListadoImpresoras/ListaImpresora';
import TelefonosInternos from './pages/TelefonosInternos/TelefonosInternos';
import CargaNewImpresora from './pages/CargaElementos/NewImpresora/CargaNewImpresora';
import HomeCargaElementos from './pages/CargaElementos/HomeCargaElementos/HomeCargaElementos';

function App() {

  return (
    <>
    <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/HomeListaElementos' element={<HomeListaElementos/>}/>
          <Route path='/ListaVpn' element={<ListaVpn/>}/>
          <Route path='/ListaPcEscritorio' element={<ListaPcEscritorio/>}/>
          <Route path='/ListaNotebook' element={<ListaNotebook/>}/>
          <Route path='/ListaImpresora' element={<ListaImpresora/>}/>
          <Route path='/TelefonosInternos' element={<TelefonosInternos/>}/>
          {/**Ruta de Carga de Nuevos Elementos */}
          <Route path='/NuevosElementos' element={<HomeCargaElementos/>}/>
          <Route path='/NuevaImpresora' element={<CargaNewImpresora/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
