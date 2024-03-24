import React from "react";
import './newPage.css';
import NewsBlock from "../newsBlock/NewsBlock";

function NewsPage(){
    return(
        <div className="new-page">
            <div className="new-page__content">
                <div className="new-page__title">
                    <p className="title__text">Новости</p>
                </div>
                <div className="new-page__news">
                    <NewsBlock height="md"/>
                    <NewsBlock height="md"/>
                    <NewsBlock height="md"/>
                    <NewsBlock height="md"/>
                    <NewsBlock height="md"/>
                    <NewsBlock height="md"/>
                    <NewsBlock height="md"/>
                </div>
            </div>
        </div>
    );
}

export default NewsPage;