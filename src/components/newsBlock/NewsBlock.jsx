import React from "react";
import './newsBlock.css';

function NewsBlock({height="lg"}){
    return(
        <div className="news-block" data-height= {height}>
            <div className="news-block__content">
                <div className="date">
                    <div className="content__day">
                        <p className="day">21</p>
                    </div>
                    <div className="content__month-years">
                        <p className="month-years">сен 2021</p>
                    </div>
                </div>
                <div className="content__info">
                    <p className="info">
                     Объявление о проведении внеочередного
                     общего собрания акционеров</p>
                </div>
            </div>
        </div>
    );
}

export default NewsBlock;