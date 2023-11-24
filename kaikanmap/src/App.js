import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { Routes, Route } from 'react-router-dom';
import Calendario from './pages/calendario';
import Home from './pages/home';
import Equipe from './pages/equipe';
import ListaKaikan from './pages/lista';
import Evento from './pages/evento'
import './style.css';
import RegistroK from './pages/registro';
import NomedoKaikan from './pages/NomedoKaikan';
import Registro_evento from './pages/Registro_evento';
import { createContext, useState } from 'react';


function App() {  
  
  return (
 
      <Routes>      
        <Route path='/' element={<Home />}  />      
        <Route path='equipe' element={<Equipe />} />
        <Route path='listakaikan' element={<ListaKaikan />} />
        <Route path='calendario' element={<Calendario />} />        
        <Route path="/evento/:id" element={<Evento />} />
        <Route path="/registro" element={<RegistroK />} />
        <Route path='/NomedoKaikan' element={<NomedoKaikan />}  />
        <Route path='/RegistroEvento' element={<Registro_evento />}  />         
      </Routes>

  );
}

export default App;
