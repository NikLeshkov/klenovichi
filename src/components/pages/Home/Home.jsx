import React from "react";
import MainSection from "../../mainSection/MainSection";
import AboutAs from "../../aboutAs/AboutAs";
import News from "../../news/News";
import MoreInformation from "../../moreInformation/MoreInformation";

export default function Home(){
    return (
        <>
           <MainSection />  
           <AboutAs/>
           <News/>
           <MoreInformation/>
        </>
    );
}