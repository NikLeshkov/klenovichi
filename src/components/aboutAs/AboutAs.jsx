import React from "react";
import './aboutAs.css';
import someImg from '../header/svg/logo-little.png';

function AboutAs(){
    return(
        <div className="section__about-as"> 
            <div className="wrapper__about">
                <div className="about-as__title">
                    <div className="title__text">
                        <p className="text">Об организации</p>
                    </div>
                    <div className="title__rectangle"></div>
                </div>
                <div className="about-as__content">
                    <div className="about-as__map">
                        <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d172.610296327022!2d29.29094227873724!3d54.381295605239764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46da97c6caa2e069%3A0xae91a2ca2b8153d8!2z0JHQtdC70LDRgNGD0YHQsdCw0L3Qug!5e0!3m2!1sru!2sby!4v1710931098965!5m2!1sru!2sby" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="about-as__description">
                        <p className="full_name">
                        Полное наименование юридического лица:
                        Открытое акционерное общество "Кленовичи"
                        </p>
                        <p className="yur_adress">
                            Юридический адрес:
                            222018, Беларусь, Минская область, Крупский район,
                            аг. Замки, пер. Школьный, д. 1</p>
                        <p className="UNP">
                            УНП: 600025591
                        </p>
                        <p className="phone__number">
                            Приемная: +375179646380
                        </p>
                        <p className="fax__number">
                            Факс: +375179646351
                        </p>
                        <p className="email">
                            E-mail:  <a href="#!" className="e-mail">klenovichi@mail.ru</a>
                        </p>
                </div>
            </div>
        </div>
        </div>
    );
}

export default AboutAs;