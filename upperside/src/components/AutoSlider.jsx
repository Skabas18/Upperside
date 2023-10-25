import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImagenF from '../assets/Modales/RayaNegraAnuncios.png'
import Slider from "react-slick";
function AutoSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Cambia el slide cada 2 segundos
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={ImagenF} alt="Anuncio 1" width={600}/>
        </div>
        <div>
          <img src="url_de_la_imagen_2" alt="Anuncio 2" />
        </div>
        {/* Agrega más slides según sea necesario */}
      </Slider>
    </div>
  );
};

export default AutoSlider