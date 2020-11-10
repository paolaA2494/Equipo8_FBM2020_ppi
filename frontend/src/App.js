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
<<<<<<< HEAD
import Entrenamiento_dos from '../src/pages/Entrenamiento_dos';
import Entrenamiento_tres from '../src/pages/Entrenamiento_tres';
import Abdomen_prin from './circutos/Abdomen_prin';
import Usuario_2 from '../src/pages/Usuario_2';
import Usuario_3 from '../src/pages/Usuario_3';
=======
>>>>>>> f7bd3d4bc638591241c276fc989ffcb4f367c2b7
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';


<<<<<<< HEAD




=======
>>>>>>> f7bd3d4bc638591241c276fc989ffcb4f367c2b7
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
<<<<<<< HEAD
          <Route path="/usuario_2" component={Usuario_2}>
              <Usuario_2/>
          </Route>
          <Route path="/usuario_3" component={Usuario_3}>
              <Usuario_3/>
          </Route>
=======
>>>>>>> f7bd3d4bc638591241c276fc989ffcb4f367c2b7
          <Route path="/calendario" component={Calendario}>
              <Calendario/>
          </Route>
          <Route path="/entrenamiento" component={Entrenamiento}>
              <Entrenamiento/>
          </Route>
<<<<<<< HEAD
          <Route path="/entrenamiento_dos" component={Entrenamiento_dos}>
              <Entrenamiento_dos/>
          </Route>
          <Route path="/entrenamiento_tres" component={Entrenamiento_tres}>
              <Entrenamiento_tres/>
          </Route>
          <Route path="/retroalimentacion" component={Retroalimentacion}>
              <Retroalimentacion/>
          </Route>
          <Route path="/cuestionario" component={Cuestionario}>
              <Cuestionario/>
          </Route>
          <Route path="/abdomen_prin" component={Abdomen_prin}>
              <Abdomen_prin/>
          </Route>

         

=======
          <Route path="/retroalimentacion" component={Entrenamiento}>
              <Retroalimentacion/>
          </Route>
          <Route path="/cuestionario" component={Entrenamiento}>
              <Cuestionario/>
          </Route>
>>>>>>> f7bd3d4bc638591241c276fc989ffcb4f367c2b7

        </Switch>
        </BrowserRouter>
  
   
    
  );
}

export default App;
