import React from "react";
import logo from "../assets/LogoUpperside.png";
import "./Navbar.css"; // Estilos CSS para la barra de navegación

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

            </div>
        </nav>
    );
};

export default Navbar;
