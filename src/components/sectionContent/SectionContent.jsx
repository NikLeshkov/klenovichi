import React from "react";
import './sectionContent.css';
import photoOrg from './images/image.png';

function SectionContent(){
    return(
    <section className="label__section">
        <div className="organization__name">
            <div className="title__name">
                <p className="title">ОАО КЛЕНОВИЧИ</p>
            </div>
            <div className="sub-title__name">
                <p className="sub-title">Открытое акционерное общество "Кленовичи"</p>
            </div>
        </div>
        <div className="organization__photo">
            <img src={photoOrg} alt="кортинка" />
        </div>
    </section>
    );
}

export default SectionContent;