import React from "react";
import './achivmentPage.css'
import AchivmentBlock from "../achivmentBlock/AchivmentBlock";

function AchivmentsPage(){
    return(
        <div className="achivment__page">
            <div className="achivment__page__content">
                <div className="achivment__title">
                    <div className="title__text">Достижения</div>
                </div>
                <div className="achivment__blocks">
                    <AchivmentBlock/>
                    <AchivmentBlock/>
                    <AchivmentBlock/>
                    <AchivmentBlock/>
                    <AchivmentBlock/>
                </div>
            </div>
        </div>
    );
}

export default AchivmentsPage;