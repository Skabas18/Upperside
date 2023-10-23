import React, { useState } from 'react'
import UserProfile from '../assets/IconoPerfil.svg';
import ShoppingBag from '../assets/IconoBolsa.svg';
import IconSearch from '../assets/IconoLupa.svg';
import FavoriteIcon from '../assets/IconoCorazón.svg';
import '../styles/Burguer.css';


function BurguerButton() {
    const [submenuVisible, setSubmenuVisible] = useState(false);
    const handleIconClick = () => {
        setSubmenuVisible(!submenuVisible);
    };
    return (
        <div className='en-efecto'>
            <div className="IconsMenu">
                <img src={IconSearch} alt="Icono de Busqueda" className="icon-navbar" />
                <img src={FavoriteIcon} alt="Icono de Corazon" className="icon-navbar" />
                <img src={UserProfile} alt="Icono de Perfil" className="icon-navbar" />
                <img src={ShoppingBag} alt="Icono de Carrito Compras" className="icon-navbar" />
            </div>
            <div className='BurguerMenu' onClick={handleIconClick}>
                <div className="icon nav-icon-5">
                    <span></span>
                    <span></span>
                    <span></span>
                    {submenuVisible && (
                        <ul>
                            <li>Colecciones</li>
                            <li>Lencería</li>
                            <li>Inferiores</li>
                            <li>Complementos</li>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    )
}

export default BurguerButton