import React, { useState } from 'react'
import "../styles/SubMenu.css"

export default function SubMenu() {

    const [clicks, setClicks] = useState([]);

    const handleTitleClick = (title) => {
        setClicks([...clicks, title]);
    };
    return (
        <div className="container">
            <div className="column" onClick={() => handleTitleClick('Columna 1')}>
                <ul className={ "navbar-center"} onClick={() => handleTitleClick('Columna 1')}>
                    <li>Colecciones</li>
                    <li>Lencería</li>
                    <li>Inferiores</li>
                    <li>Complementos</li>
                </ul>
            </div>
        </div>
    );
}
