import React from "react";
import './bestCustomerInfo.css';
import customer from './images/customer.png'
import TechnikCard from "../technikCard/TechnikCard";

function BestCustomerInfo(){
    return(
        <div className="best__customer__info">
            <div className="best__customer__content">
                <div className="best__customer__title">
                    <p className="title__text">Лучший работник</p>
                </div>
                <div className="best__customer__resume">
                    <div className="best__customer__picture">
                            <img className="customer__photo" src={customer} alt="" />
                    </div>
                    <div className="best__customer__description">
                        <p className="description__title">Лабуть Кирилл Анатольевич</p>
                        <p className="description__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum consectetur corporis, magni dolorum magnam vel velit aspernatur fuga rerum, veritatis iure quisquam iste asperiores, dicta dolorem quaerat blanditiis. Totam cupiditate amet, quidem recusandae ipsa exercitationem eos quo vero qui quas doloribus neque ab explicabo delectus praesentium ipsam. Maxime, quasi ex! Laudantium, placeat non quis alias eum aliquid aspernatur debitis molestias blanditiis incidunt dolores eaque ducimus aut quisquam, adipisci ipsum deserunt cumque! Expedita eius ad beatae aliquid placeat fugiat quae eveniet? Nobis assumenda autem consequatur voluptatum ducimus beatae officia, est molestiae. Consequatur tempora labore, possimus qui hic exercitationem provident blanditiis et!</p>
                    </div>
                </div>
                <div className="best__customer__technik">
                        <p className="technik__title">Техника на которой работал Кирилл</p>
                        <TechnikCard/>
                </div>
            </div>
        </div>
    );
}

export default BestCustomerInfo;