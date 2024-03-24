import React from "react";
import './news.css';
import NewsBlock from "../newsBlock/NewsBlock";
import Button from "../base/button/Button";

function News(){
    return(
        <div className="section__news">
            <div className="news__content">
                <div className="news__title">
                    <p className="text__title">НОВОСТИ</p>
                </div>
                <div className="news__information">
                    <NewsBlock />
                    <NewsBlock />
                    <NewsBlock />
                </div>
                <div className="news__button">
                    <Button>Показать больше</Button>
                </div>
            </div>
        </div>
    );
}

export default News;