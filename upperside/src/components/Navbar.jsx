import React from "react";
import logo from "../assets/LogoUpperside.png";
import "./Navbar.css"; // Estilos CSS para la barra de navegación
import UserProfile from '../assets/IconoPerfil.svg';
import ShoppingBag from '../assets/IconoBolsa.svg';
import IconSearch from '../assets/IconoLupa.svg';
import FavoriteIcon from '../assets/IconoCorazón.svg';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img src={logo} alt="Logo" className="logo" />
            </div>
            <div className="navbar-center"> 
                <a href="#" className="nav-link">  
                    Inicio
                </a>
                <a href="#" className="nav-link">
                    Perfil
                </a>
                <a href="#" className="nav-link">
                    Mensajes
                </a>
                <a href="#" className="nav-link">
                    Configuración
                </a>
            </div>
            <div className="navbar-right">
            <img src={IconSearch} alt="Icono de Busqueda" className="icon-navbar"  />
            <img src={FavoriteIcon} alt="Icono de Corazon" className="icon-navbar"  />
            <img src={UserProfile} alt="Icono de Perfil" className="icon-navbar"  />
            <img src={ShoppingBag} alt="Icono de Carrito Compras" className="icon-navbar"  />
            

            </div>
        </nav>
    );
};

export default Navbar;
