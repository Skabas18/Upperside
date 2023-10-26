import React from 'react'
import logo from "../assets/LogoUppersideBlaco.png"
import '../styles/Footer.css'
function Footer() {
    return (
        <div className='footer'>
            <div className='footer-section-padding'>
                <div className='footer-links'>
                    <div className='footer-links-div'>
                        <img src={logo} alt="" />
                        <a href="https://www.google.com/">
                            <p>Plítica y privacidad</p>
                            <p>Términos y condiciones</p>
                        </a>
                        <hr />
                        <p>Si deseas mas información sobre tus datos personales, puedes escribirnos
                            al siguiente correo. info@upperside.co
                        </p>
                        <hr />
                        <p>Siguenos en nuestras redes sociales</p>

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
                </div>
            </div>
        </div>
    )
}

export default Footer