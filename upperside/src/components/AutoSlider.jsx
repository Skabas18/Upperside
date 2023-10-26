import React, {  useState } from 'react'
import { data } from '../components/Data'

function AutoSlider() {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div className="main-container">
      <div className="slider-container">
        <div className='leftArrow' onClick={prevSlide}>&#10092;</div>
        <div className='rightArrow' onClick={nextSlide}>&#10093;</div>
        <div className="container-images">

          {data.map((item, idx) => {
            return (
              <img
                src={item.src}
                alt={item.alt}
                key={idx}
                className={slide === idx ? "slide" : "slide slide-hidden"}
              />
            );
          })}
        </div>
      </div>
    </div >
  )
};

export default AutoSlider