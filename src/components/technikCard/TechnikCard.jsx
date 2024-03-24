import React from "react";
import './technikCard.css';
import car from './images/car.png';

function TechnikCard(){
    return(
        <div className="techink__card">
            <div className="technik__card_content">
                    <div className="technik__pohoto">
                        <img src={car} alt="кортинка" />
                    </div>
                <div className="technik__description">
                    <div className="technik__name">
                        <p className="name__text">МАЗ 5440</p>
                    </div>
                    <div className="technik__model">
                        <p className="model__text">Модель: нормальная</p>
                    </div>
                    <div className="technik__type">
                        <p className="type__text">Тип: какой-то типочек</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TechnikCard;