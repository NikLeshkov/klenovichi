import React from "react";
import './footer.css';
import logo from './images/logo-big.png';
import phone from './images/phone.png';
import message from './images/message.png';
import geo from './images/geo.png'; 

function Footer(){
    return(
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__logo">
                    <img src={logo} alt="лого" />
                </div>
                <div className="footer__contact">
                    <div className="message info">
                        <img src={message} alt="мэсэдж"/>
                        <a href="#!" className="message_email">klenovichi@mail.ru</a>
                    </div>
                    <div className="phone info">
                        <img src={phone} alt="телефон" />
                        <p className="phone__number">+375179646380</p>
                    </div>
                </div>
                <div className="footer__geo info">
                    <img src={geo} alt="гео" />
                    <p className="geo__location">
                     222018, Беларусь, Минская область, Крупский район,
                     аг. Замки, пер. Школьный, д. 1
                    </p>
                </div>
                <div className="footer__full-name">
                    <p className="full-name">Открытое акционерное общество "Кленовичи"</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;