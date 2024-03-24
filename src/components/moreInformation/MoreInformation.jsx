import React from "react";
import './moreInformation.css';
import MoreInformationTable from "../moreInformationTable/MoreInformationTble";
import Button from "../base/button/Button";

function MoreInformation(){
    return(
        <div className="section__more-information">
            <div className="wrapper__more-information">
                <div className="more-information__content">
                    <div className="more-information__title">
                        <p className="text__title">Раскрытие информации</p>
                    </div>
                    <div className="info__table">
                        <MoreInformationTable/>
                    </div>
                    <div className="info__button">
                        <Button>Показать больше</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MoreInformation;