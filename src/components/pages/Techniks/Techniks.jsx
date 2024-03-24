import TechnikCard from "../../technikCard/TechnikCard";
import './techniks.css'


export default function Techniks(){
    return (
        <div className="section__techniks">
            <div className="techniks__content">
                <div className="techniks__title">
                    <p className="text__title">Техника</p>
                </div>
                <div className="techniks__cards">
                    <TechnikCard/>
                    <TechnikCard/>
                    <TechnikCard/>
                    <TechnikCard/>
                    <TechnikCard/>
                    <TechnikCard/>
                    <TechnikCard/>
                    <TechnikCard/>
                </div>
            </div>
        </div>
    );
}