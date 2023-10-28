import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { Routes, Route } from 'react-router-dom';
import Calendario from './pages/calendario';
import Home from './pages/home';
import Equipe from './pages/equipe';
import ListaKaikan from './pages/lista';
import './style.css';




function App() {
  return (

    <Routes>      
      <Route path='/' element={<Home/>}  />
      <Route path='calendario' element={<Calendario/>} /> 
      <Route path='equipe' element={<Equipe/>} />
      <Route path='listakaikan' element={<ListaKaikan/>} />
    </Routes>
  );
}

export default App;
