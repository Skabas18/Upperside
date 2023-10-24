import React from "react";
import { Link } from 'react-router-dom';
import logo from "../assets/LogoUpperside.png";
import "../styles/Navbar.css"; // Estilos CSS para la barra de navegación
import BurguerButton from "./BurguerButton..jsx";


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/">
                    <img src={logo} alt="Logo" className="logo" />
                </Link>
            </div>
            <div className="navbar-center">
                <ul id="nav">
                    <li><Link to="/Colecciones" className="nav-active">Colecciones</Link></li>
                    <li><Link to="/Lenceria">Lencería</Link></li>
                    <li><Link to="/Inferiores">Inferiores</Link></li>
                    <li><Link to="/Complementos">Complementos</Link></li>
                </ul>
            </div>
            <div className="navbar-right">
                <BurguerButton />
            </div>
        </nav>
    );
};

export default Navbar;
