import React from "react";
import './achivmentBlock.css';

function AchivmentBlock(){
    return(
        <div className="achivment__block">
            <div className="achivment__content">
                <div className="date">
                    <div className="content__day">
                        <p className="day">21</p>
                    </div>
                    <div className="content__month-years">
                        <p className="month-years">сен 2021</p>
                    </div>
                </div>
                <div className="achivment__description">
                    <p className="achivment__title">ТОП 1 МИРА ПА ЗЯРНУ</p>
                    <p className="achivment__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, veritatis aspernatur! Amet incidunt nulla reiciendis doloribus aperiam illum, sunt ab obcaecati. Quidem sed deleniti ipsum minus. Libero ut enim minus!</p>
                </div>
            </div>
            
        </div>
    );
}

export default AchivmentBlock;
