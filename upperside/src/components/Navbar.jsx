import React from "react";
import logo from "../assets/LogoUpperside.png";
import "../styles/Navbar.css"; // Estilos CSS para la barra de navegación
import BurguerButton from "./BurguerButton..jsx";


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img src={logo} alt="Logo" className="logo" />
            </div>
            <div className="navbar-center">
                <a href="#" className="nav-link">
                    Colecciones
                </a>
                <a href="#" className="nav-link">
                    Lencería
                </a>
                <a href="#" className="nav-link">
                    Inferiores
                </a>
                <a href="#" className="nav-link">
                    Complementos
                </a>
            </div>
            <div className="navbar-right">
                    <BurguerButton />
            </div>
        </nav>
    );
};

export default Navbar;
