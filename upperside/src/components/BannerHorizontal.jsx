import React, { useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs"
import '../styles/BannerHorizontal.css'

function BannerHorizontal({ data }) {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
    };

    const prevSlide = (e) => {
        e.stopPropagation();
        setSlide(slide === 0 ? data.length - 1 : slide - 1);
    };

    return (
        <div className="carousel">
            <div className="slider-container">
                {data.map((item, idx) => (
                    <img
                        src={item.src}
                        alt={item.alt}
                        key={idx}
                        className={slide === idx ? "slide" : "slide slide-hidden"}
                    />
                ))}
            </div>
            <button className="custom-button" onClick={console.log("Hola")}>
                Ver Mas
            </button>
            <div className="arrowsH">
                <div className="arrow-left">
                    <BsArrowLeftCircleFill onClick={prevSlide} className="arrowH" />
                </div>
                <div className="arrow-right">
                    <BsArrowRightCircleFill onClick={nextSlide} className="arrowH" />
                </div>
            </div>
        </div>
    );
}

export default BannerHorizontal