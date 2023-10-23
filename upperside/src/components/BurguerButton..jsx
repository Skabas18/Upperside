import React from 'react'
import UserProfile from '../assets/IconoPerfil.svg';
import ShoppingBag from '../assets/IconoBolsa.svg';
import IconSearch from '../assets/IconoLupa.svg';
import FavoriteIcon from '../assets/IconoCorazón.svg';
import '../styles/Burguer.css';


function BurguerButton() {
    return (
        <div className='en-efecto'>
            <div className="IconsMenu">
                <img src={IconSearch} alt="Icono de Busqueda" className="icon-navbar" />
                <img src={FavoriteIcon} alt="Icono de Corazon" className="icon-navbar" />
                <img src={UserProfile} alt="Icono de Perfil" className="icon-navbar" />
                <img src={ShoppingBag} alt="Icono de Carrito Compras" className="icon-navbar" />
            </div>
            <div className='BurguerMenu'>
                <div className="icon nav-icon-5">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default BurguerButton