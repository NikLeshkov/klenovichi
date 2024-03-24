import React from "react";
import './informationPage.css';
import MoreInformationTable from "../moreInformationTable/MoreInformationTble";


function InformationPage(){
    return(
        <div className="info-page">
            <div className="info-page__content">
                <div className="info-page__title">
                    <p className="title__text">Информация</p>
                </div>
                <div className="info-page__info">
                    <MoreInformationTable/>
                </div>
            </div>
        </div>
    );
}

export default InformationPage;