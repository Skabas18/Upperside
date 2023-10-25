import React, { useEffect, useRef, useState } from 'react';
import { data } from '../components/Data';
import '../styles/CustomSlider.css';
import fondo from '../assets/Modales/BannerPrincipal.png';


function CustomSlider() {
    const listRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const listNode = listRef.current;
        const imgNode = listNode.querySelectorAll("li > img")[currentIndex];

        if (imgNode) {
            imgNode.scrollIntoView({
                behavior: "smooth"
            });
        }
    }, [currentIndex])

    const scrollToImage = (direction) => {
        if (direction === 'prev') {
            setCurrentIndex(curr => {
                const isFirstSlide = currentIndex === 0;
                return isFirstSlide ? 0 : curr - 1;
            })
        } else {
            const isLastSlide = currentIndex === data.length - 1;
            if (!isLastSlide) {
                setCurrentIndex(curr => curr + 1);
            }
        }
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }

    return (
        <div>
            <div className="main-container">
                <div className="slider-container">
                    <div className='leftArrow' onClick={() => scrollToImage('prev')}>&#10092;</div>
                    <div className='rightArrow' onClick={() => scrollToImage('next')}>&#10093;</div>
                    <div className="container-images">
                        <ul ref={listRef}>
                            {
                                data.map((item) => {
                                    return <li key={item.id}>
                                        <img src={item.imgUrl} width={500} height={280} alt="" />
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                    <div className="dots-container">
                        {
                            data.map((_, idx) => (
                                <div key={idx}
                                    className={`dot-container-item ${idx === currentIndex ? "active" : ""}`}
                                    onClick={() => goToSlide(idx)}>
                                    &#9865;
                                </div>))
                        }
                    </div>
                </div>
            </div >
            <img src={fondo} width={500} height={280} alt="" />
            {/* data[0].imgUrl */}
        </div>

    );
}

export default CustomSlider 