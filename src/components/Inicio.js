import {useState} from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import imagen1 from '../imagenes/img5.png';
import imagen2 from '../imagenes/img8.png';
import imagen3 from '../imagenes/img1.png';

const Slideshow = () => {
    const slideImages = [
        {
            url: imagen1,
            titulo: "DOMUS INMOBILIARIA",
            texto: "LA VIVIENDA NO ES SOLO UN BIEN INMOBILIARIO,",
            texto2: " ES TAMBIEN UNA FORMA DE CONSOLIDACION ESPIRITUAL"
        },
        {
            url: imagen2,
            titulo: "EMPRESA LIDER EN COMPRA Y VENTA DE PROPIEDADES",
            texto: "CONTAMOS CON LAS MEJORES PROPIEDADES",
            texto2:""
        },
        {
            url: imagen3,
            titulo: "NO HAY LUGAR COMO EL HOGAR",
            texto: "EL HOGAR ES EL REFUGIO CONTRA TODO TIPO DE TORMENTAS",
            texto2: ""
        }
    ];

    const imagenes = slideImages.map(obj => {
        return (
        <div className="each-slide">
            <div style={{
                backgroundImage: `url(${obj.url})`, 
                height: "625px", objectFit: 'cover', 
                backgroundSize: 'cover', backgroundRepeat: 'no-repeat', 
                backgroundPosition: '50% 50%',alignContent:'center',
                 display: 'grid'}}>
                    
                    <h1  style={{color: 'white', marginLeft:30}}>{obj.titulo}</h1>
                    <h3  style={{color: 'white', marginLeft:30}}>{obj.texto}</h3>
                    <h3  style={{color: 'white', marginLeft:30}}>{obj.texto2}</h3>

            </div>
        </div>
        )
    })

    return (
      <div className="slide-container" style={{marginTop: 65}}>
        <Slide>
            {imagenes}
        </Slide>
      </div>
    )
}

const Inicio = () => {

    return ( 
        <div className = "Inicio">

            <Slideshow />
        </div>
     );
}
 
export default Inicio;