import React from 'react'
import Banner from "../assets/Modales/BannerGlamoura.jpg"
import Anuncio from "../assets/Modales/BannerAnuncioColeccion.jpg"
import BannerC from "../assets/Modales/BannerColeccion.png"
import TituloB from "../assets/Modales/TituloColeccion.png"
import AutoSlider from '../components/AutoSlider'
import ImagenPromo from "../assets/Modales/TitulOtrasColecciones.png"
import BannerHorizontal from '../components/BannerHorizontal'
import Breadcrumbs from "../components/BreadCrumbs"
import { data } from '../components/Data'

import "../styles/Colecciones.css"
function Colecciones() {

  // const path = ['Inicio', 'Categoría', 'Producto'];
  const path = window.location.pathname.split('/').filter(Boolean);
  console.log("ESTE ES EL PATH --->"+path);
  return (
    <div>
      <div className='Banner-header'>
        <img src={Banner} alt="" />
        <img src={Anuncio} alt="" />
      </div>

      <div >
        <Breadcrumbs path={path} />
      </div>
      <div className='Banner-Horizontal'>
        <h1>SUPÉRIORES</h1>
        <BannerHorizontal data={data} />
      </div>
      <div className='Promocion'>
        <div className='Imagen-promocion'>
          <img src={BannerC} alt="" />
        </div>
        <div className='Imagen-titulo'>
          <img src={TituloB} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Est aspernatur neque similique quisquam, ea iure dolor ad
            placeat ex? Illum quas ut aliquid perferendis alias laboriosam distinctio dolore! Voluptatem, voluptatum?</p>
          <button className='boton'>Hola</button>
        </div>
      </div>

      <div className='Banner-Horizontal'>
        <h1>INFERIORES</h1>
        <BannerHorizontal data={data} />
      </div>
      <div className="Banner-Colecciones">
        <div className="Columna1">
          <img src={ImagenPromo} alt="" />
        </div>
        <div className="Columna2">
          <AutoSlider />
        </div>
      </div>
    </div>
  )
}

export default Colecciones