
import React, { Component } from 'react';
import Logo from '../img/LOGO.jpg';
import '../styles/Registro.css';
import { Link } from 'react-router-dom';

class Registro extends Component {
    render (){
        return(
            <div>
               <main>
                   <img className="Avatar" src={Logo} alt=""/>
                   <div className="contenedor">
                       <div className="formulario">
                           <h2>Registrarse</h2>
<<<<<<< HEAD
                        */ruta de acuerdo al backend*/ 
                           <form action="localhost:3000/Registro">
                               
=======

                           <from>
>>>>>>> f7bd3d4bc638591241c276fc989ffcb4f367c2b7
                               <input type="text" placeholder="Nombre"/>
                               <input type="text" placeholder="Apellido"/>
                               <input type="text" placeholder="Correo"/>
                               <input type="text" placeholder="Contraseña"/>
                                <Link to="/cuestionario">
                                <input type="submit" placeholder="Ingresar"/>
                                </Link>
                              
<<<<<<< HEAD
                           </form>
=======
                           </from>
>>>>>>> f7bd3d4bc638591241c276fc989ffcb4f367c2b7
                       </div>
                   </div>
               </main>

            </div>
        );
    }

}
export default Registro;