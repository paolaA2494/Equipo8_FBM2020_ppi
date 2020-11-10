import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hombre1 from '../img/hombre1.jpeg';
import Hombre2 from '../img/hombre2.jpeg';
import Imagengrande from '../img/imagengrande.jpeg';
import '../styles/Principal.css';



function Principal(props){
    return(
        <div>
            <Header/>
            
            <main>
            
<h2 className="titulo ">Guía tu Cuerpo</h2>
<section className="sepcion-uno">
    <div className="contenedor-dos">
        <img src={Hombre1} alt=""/>
        <h3 className="titulo-cuatro">Alimentate Bien</h3>
<<<<<<< HEAD
        <p> Una alimentación saludable es importante para sentirse bien y prevenir enfermedades crónicas como diabetes, hipertensión, obesidad y algunos tipos de cáncer. Con adoptar pequeños cambios, se pueden obtener grandes resultados.</p>
=======
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio inventore nulla nobis doloremque nesciunt amet aliquam rem exercitationem iste sit?
        </p>
>>>>>>> f7bd3d4bc638591241c276fc989ffcb4f367c2b7
    </div>
    <div className="contenedor-tres">
        <img src={Hombre2} alt=""/>
        <h3 className="titulo-cuatro">Desde tu Propia Casa</h3>
<<<<<<< HEAD
        <p>El ejercicio en casa es ideal si la persona es mayor o está lesionada. Son las dos razones con más peso para elegir esta opción. Las caminatas y los ejercicios aeróbicos mejoran la salud cardiovascular, la articular y son fundamentales para perder peso.</p>
=======
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, repellendus. Cupiditate atque sed iusto nisi consectetur, eos magnam itaque aperiam.
        </p>
>>>>>>> f7bd3d4bc638591241c276fc989ffcb4f367c2b7
    </div>
</section>

<section className="sepcion-dos">
    <div className="imagen">
        <img src={Imagengrande} alt=""/>
    </div>

    <div className="texto">
        <h2 className="tilulo-dos">Algo Importante</h2>
<<<<<<< HEAD
        <p>Existen estudios que demuestran que hacer ejercicio físico puede mejorar la memoria en los adultos. De hecho algunos arrojan datos tan curiosos como que correr y caminar mejoran la retención de vocabulario. Para las mujeres, el ejercicio físico ayuda a aliviar los síntomas del síndrome pre menstrual.</p>
=======
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus accusamus dolorum ea, ad adipisci excepturi sapiente sed libero at, eos exercitationem sequi vitae porro pariatur.</p>
>>>>>>> f7bd3d4bc638591241c276fc989ffcb4f367c2b7
    </div>

</section>

<section className="sepcion-tres">
    <div className="columna-uno">
        <h3 className="titulo-tres">Explora tu Cuerpo</h3>
<<<<<<< HEAD
        <p> Date el lujo de conocerte, analiza tu cuerpo y dale lo que necesita, cuídate a ti mismo y en un futuro tal vez cercano, serás muy bien recompensado </p>
    </div>
    <div className="columna-dos">
        <h3 className="titulo-tres">Beneficios</h3>
        <p> La actividad física regular puede mejorar la fuerza muscular y aumentar la resistencia. El ejercicio suministra oxígeno y nutrientes a los tejidos y ayuda a que el sistema cardiovascular funcione de manera más eficiente. Y cuando tu salud cardíaca y pulmonar mejora, tienes más energía para hacer las tareas diarias</p>
    </div>
    <div className="columna-tres">
        <h3 className="titulo-tres">Dificultades</h3>
        <p>Los huesos pueden sufrir las consecuencias, así como los músculos y las articulaciones, volviéndose la débiles. Otra consecuencia de la falta de ejercicio puede ser el envejecimiento prematuro. Nuestro cuerpo pierde fibras musculares, el metabolismo se vuelve más lento y empeora el riego sanguíneo.</p>
=======
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi provident numquam atque veniam deserunt laboriosam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, placeat.</p>
    </div>
    <div className="columna-dos">
        <h3 className="titulo-tres">Beneficios</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, rerum ducimus. Itaque ex quod voluptatum repudiandae maiores nihil quibusdam et!</p>
    </div>
    <div className="columna-tres">
        <h3 className="titulo-tres">Dificultades</h3>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, fugiat.</p>
        <p>Lorem ipsum dolor sit amet.</p>
>>>>>>> f7bd3d4bc638591241c276fc989ffcb4f367c2b7
    </div>
</section>
</main>
<Footer/>

        </div>
    );
}
export default Principal;