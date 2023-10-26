import React, { useState } from 'react'
import logo from "../assets/LogoUppersideBlaco.png"
import Whatsapp from "../assets/Iconos/Whatsapp.svg"
import Tiktok from "../assets/Iconos/TikTok.svg"
import Instagram from "../assets/Iconos/Instagram.svg"
import Youtube from "../assets/Iconos/Youtube.svg"
import '../styles/Footer.css'
function Footer() {
    const [correoElectronico, setCorreoElectronico] = useState('');

    const handleInputChange = (event) => {
        setCorreoElectronico(event.target.value);
    };

    const handleRegistrarseClick = () => {
        // Aquí puedes realizar acciones como enviar el correo electrónico a un servidor
        console.log('Correo electrónico registrado:', correoElectronico);
    };

    return (
        <div className='footer'>
            <div className='footer-section-padding'>
                <div className='footer-links'>
                    <div className='footer-links-div'>
                        <img src={logo} alt="" />
                        <a href="https://www.google.com/">
                            <p>Política y privacidad</p>
                            <p>Términos y condiciones</p>
                        </a>
                        <hr />
                        <p>Si deseas mas información sobre tus datos personales, puedes escribirnos
                            al siguiente correo. info@upperside.co
                        </p>
                        <hr />
                        <p>Siguenos en nuestras redes sociales</p>
                        <div className='socialmedia'>
                            <a href="https://www.google.com/">
                                <img src={Instagram} alt="" />
                            </a>
                            <a href="https://www.google.com/">
                                <img src={Whatsapp} alt="" />
                            </a>
                            <a href="https://www.google.com/">
                                <img src={Tiktok} alt="" />
                            </a>
                            <a href="https://www.google.com/">
                                <img src={Youtube} alt="" />
                            </a>
                        </div>

                    </div>
                    <div className='footer-links-div'>
                        <h4>Trabaja con nosotros</h4>
                        <p>¿Estas interesad@ en hacer parte del equipo Upper?</p>
                        <p>Comunícate con:
                            info@upperside.co
                        </p>
                        <p>PBX
                            +(57) 602 8912397
                        </p>
                    </div>
                    <div className='footer-links-div'>
                        <h4>¡Mantente informad@ sobre Upperside!</h4>
                        <div className="registro-formulario">
                            <input
                                type="email"
                                placeholder="Correo electrónico"
                                value={correoElectronico}
                                onChange={handleInputChange}
                            />
                            <button onClick={handleRegistrarseClick}>Registrarse</button>
                        </div>
                        <p>Comunícate con:
                            info@upperside.co
                        </p>
                        <p>PBX
                            +(57) 602 8912397
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer