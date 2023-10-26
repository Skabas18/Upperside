import React, { useState } from 'react'
import { BsArrowUpCircleFill, BsArrowDownCircleFill } from "react-icons/bs"
import '../styles/CustomSlider.css'

function CustomSlider({ data }) {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
    };

    const prevSlide = (e) => {
        e.stopPropagation();
        setSlide(slide === 0 ? data.length - 1 : slide - 1);
        console.log("E =>"+slide);
    };

    
    return (
        <div className="carousel">
            <div className="slider-container">
                {data.map((item, idx) => (
                    <div className="slide-container" key={idx}>
                        <img
                            src={item.src}
                            alt={item.alt}
                            className={slide === idx ? "slide" : "slide slide-hidden"}
                        />
                        <div className="arrows">
                            <BsArrowUpCircleFill onClick={prevSlide} className="arrow arrow-up" />
                            <BsArrowDownCircleFill onClick={nextSlide} className="arrow arrow-down" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default CustomSlider 