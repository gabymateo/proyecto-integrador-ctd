import React from 'react';
import './footer.css'
import Facebook from '../../images/icon-facebook.png'
import LinkedIn from '../../images/icon-linkedIn.png'
import Twitter from '../../images/icon-twitter.png'
import Instagram from '../../images/icon-instagram.png'
import {FaFacebook} from 'react-icons/fa';
import {FaLinkedinIn} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'



const Footer = () => {
  return (
    <div className='footer'>
        <div className='footerContainer'>
            <div className='logos'>
                <span className="isologotipo">©</span>
                <span className="anio">2022 </span>
                <span className="copyright">Encuentra tu Choza</span>
            </div>
            <div className='redes'>
              <a href=""><FaFacebook/></a>
              <a href=""><FaLinkedinIn/></a>
              <a href="https://twitter.com/encuentratuchoz"><FaTwitter/></a>
              <a href="https://www.instagram.com/encuentratuchoza/"><FaInstagram/></a>
                {/* <img src={Facebook} />
                <img src={LinkedIn}/>
                <img src={Twitter}/>
                <img src={Instagram}/> */}
            </div>
        </div>
    </div>
  )
}

export default Footer