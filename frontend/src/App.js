import React from 'react';
import Principal from './pages/Principal';
import Nosotros from './pages/Nosotros';
import Iniciarsesion from './pages/Iniciarsesion';
import Registro from './pages/Registro';
import Usuario from '../src/pages/Usuario'; 
import Calendario from '../src/pages/Calendario';
import Entrenamiento from '../src/pages/Entrenamiento';
import Retroalimentacion from '../src/pages/Retroalimentacion';
import Cuestionario from '../src/pages/Cuestionario';
import Circuito_uno from '../src/circutos/Circuito_uno';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route  excat path="/" exact component={Principal}>
            <Principal/>
          </Route>
          <Route path="/nosotros" component={Nosotros}>
            <Nosotros/> 
          </Route>
          <Route path="/sesion" component={Iniciarsesion} />
            
          <Route path="/registro" component={Registro}/>
            
          <Route path="/usuario" component={Usuario}>
              <Usuario/>
          </Route>
          <Route path="/calendario" component={Calendario}>
              <Calendario/>
          </Route>
          <Route path="/entrenamiento" component={Entrenamiento}>
              <Entrenamiento/>
          </Route>
          <Route path="/retroalimentacion" component={Retroalimentacion}>
              <Retroalimentacion/>
          </Route>
          <Route path="/cuestionario" component={Cuestionario}>
              <Cuestionario/>
          </Route>
          <Route path="/puno" component={Circuito_uno}>
              <Circuito_uno/>
          </Route>

        </Switch>
        </BrowserRouter>
  
   
    
  );
}

export default App;