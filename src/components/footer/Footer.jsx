import React from 'react';
import './footer.css'
import Facebook from '../../images/icon-facebook.png'
import LinkedIn from '../../images/icon-linkedIn.png'
import Twitter from '../../images/icon-twitter.png'
import Instagram from '../../images/icon-instagram.png'


const Footer = () => {
  return (
    <div className='footer'>
        <div className='footerContainer'>
            <div className='logos'>
                <span className="isologotipo">©</span>
                <span className="anio">2022 </span>
                <span className="copyright">Digital Booking</span>
            </div>
            <div className='redes'>
                <img src={Facebook}/>
                <img src={LinkedIn}/>
                <img src={Twitter}/>
                <img src={Instagram}/>
            </div>
        </div>
    </div>
  )
}

export default Footer