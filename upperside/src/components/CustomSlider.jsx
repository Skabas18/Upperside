import React from 'react';
import Slider from 'react-slick';

import '../styles/CustomSlider.css';


function CustomSlider () {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings}>
            <div>
                <h3>Slide 1</h3>
                <button>Botón 1</button>
            </div>
            <div>
                <h3>Slide 2</h3>
                <button>Botón 2</button>
            </div>
            {/* Agrega más slides con botones según sea necesario */}
        </Slider>
    );
}

export default CustomSlider 