import React from "react";
import './moreInformationTable.css';

function MoreInformationTable(){
    return(
    <div className="table__more-information">
        <table>
            <tr>
                <th>Вид размещенной информации</th>
                <th>Дата размещения</th> 
                <th>Файл</th>
            </tr>
            <tr>
                <td>1.О формировании реестра владельцев ценных бумаг</td>
                <td>10-11-2023</td>
                <td><a href="#">скачать</a></td>
            </tr>
            <tr>
                <td>1.О формировании реестра владельцев ценных бумаг</td>
                <td>10-11-2023</td>
                <td><a href="#">скачать</a></td>
            </tr>
            <tr>
                <td>1.О формировании реестра владельцев ценных бумаг</td>
                <td>10-11-2023</td>
                <td><a href="#">скачат</a></td>
            </tr>
        </table>
    </div>  
    );
}

export default MoreInformationTable;