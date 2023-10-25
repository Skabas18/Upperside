import React, { useState } from "react";
import { Link } from 'react-router-dom';
import logo from "../assets/LogoUpperside.png";
import UserProfile from '../assets/Iconos/IconoPerfil.svg';
import ShoppingBag from '../assets/Iconos/IconoBolsa.svg';
import IconSearch from '../assets/Iconos/IconoLupa.svg';
import FavoriteIcon from '../assets/Iconos/IconoCorazón.svg';
import MenuIcon from '../assets/Iconos/Rayas-icono.svg';
import BarraFondo from '../assets/Modales/RayaNegraAnuncios.png'
import { ImCross } from "react-icons/im";
import "../styles/Navbar.css"; // Estilos CSS para la barra de navegación

const Navbar = () => {
    const [Mobile, setMobile] = useState(false);

    return (
        <div>
            <nav className="navbar">
                <div className="Navbar-left">
                    <Link to="/">
                        <img src={logo} alt="Logo" className="logo" />
                    </Link>
                </div>
                <div className="Navbar-middle">
                    <ul className={Mobile ? "navbar-center-mobile" : "navbar-center"} onClick={() => setMobile(false)}>
                        <li><Link to="/Colecciones" className="nav-active">Colecciones</Link></li>
                        <li><Link to="/Lenceria">Lencería</Link></li>
                        <li><Link to="/Inferiores">Inferiores</Link></li>
                        <li><Link to="/Complementos">Complementos</Link></li>
                    </ul>
                </div>
                <div className="Navbar-left">
                    <div className="Iconos">
                        <img src={IconSearch} alt="Icono de Busqueda" className="icon-navbar" />
                        <img src={FavoriteIcon} alt="Icono de Corazon" className="icon-navbar" />
                        <img src={UserProfile} alt="Icono de Perfil" className="icon-navbar" />
                        <img src={ShoppingBag} alt="Icono de Carrito Compras" className="icon-navbar" />
                    </div>
                    <div>
                        <button className='Icono-Menu-mobile' onClick={() => setMobile(!Mobile)}>
                            {Mobile ? <ImCross /> : <img src={MenuIcon} alt="" className='Icon-Mobile' />}
                        </button>
                    </div>
                </div>
            </nav>
            <div class="image-container">
                <div className="DivSeg">
                    <div class="div2">
                            <div className="div3">
                                <h1 class="horizontal-slide">{`COMPRA AHORA ENVIOS GRATIS 50 % OFF      `.repeat(3)}</h1>
                            </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Navbar;
