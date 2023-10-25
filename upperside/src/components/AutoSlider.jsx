import React, {useState,useEffect} from 'react';
import '../styles/AutoSlider.css';
import  {data}  from '../components/Data';
function AutoSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Función para avanzar al siguiente slide
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    };

    useEffect(() => {
        // Configura un temporizador para cambiar de slide automáticamente cada 3 segundos (3000 milisegundos)
        const interval = setInterval(nextSlide, 3000);

        // Limpia el temporizador cuando el componente se desmonta para evitar fugas de memoria
        return () => {
            clearInterval(interval);
        };
    }, []); // El segundo argumento del useEffect, un array vacío, asegura que se ejecute solo una vez al montar el componente

    return (
        <div className="slider-container">
            {data.map((image, index) => (
                <div
                    key={index}
                    className={index === currentIndex ? 'slide active' : 'slide'}
                >
                    <img src={image} alt={`slide-${index}`} />
                </div>
            ))}
        </div>
    );
};

export default AutoSlider