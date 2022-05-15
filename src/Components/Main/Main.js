import React from "react";

import Card from "./Card";
import CardsData from "../../Data/CardsData";
import "../../Assets/css/Main.css";

const Main = (props) => {
    // console.log(CardsData);

    return (
       <div>
           <div className="cards-container">
            {CardsData.map((card) => {
                return <Card card={card}/>
            })}
           </div>
       </div>
    )
}

export default Main;