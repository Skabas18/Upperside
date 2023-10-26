import React from 'react'
import '../styles/Footer.css'
function Footer() {
  return (
    <div className='footer'>
        <div className='footer-section-padding'>
            <div className='footer-links'>
                <div className='footer-links-div'>
                    <img src="../assets/LogoUppersideBlaco.png" alt="" />
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
            </div>
        </div>
    </div>
  )
}

export default Footer