import {Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Home from './pages/home';
import Equipe from './pages/equipe';


function App() {
  return (


<Routes>
 <Route path='/' element={<Home/>} />
 <Route path='equipe' element ={<Equipe/>} />

</Routes>




    
   


  );
}

export default App;
