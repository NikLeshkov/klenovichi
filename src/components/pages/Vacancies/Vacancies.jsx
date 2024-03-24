import MoreInformationTable from '../../moreInformationTable/MoreInformationTble';
import './vacancies.css';

export default function Vacancies(){
    return(
        <div className="vacancies__page">
            <div className="vacancies__content">
                <p className="vacancies__title">Вакансии</p>
                <MoreInformationTable/>
            </div>
        </div>
    );
}