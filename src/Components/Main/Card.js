import React from "react";

import "../../Assets/css/Card.css";


const Card = (props) => {

    const { card, onClick } = props;
    
    // access the image source text from imported photo in CardsData;
    const imgSrc = card.imgSrc[Object.keys(card.imgSrc)[0]];

    return (
        <div className={`card ${card.className} ${card.id}`} onClick={onClick}>
            <img src={imgSrc} alt={`Photo of ${card.title}`}  draggable="false" dragstart="false"/>
            <div className="card-title">
                {card.title}
            </div> 
        </div>
    );
}

export default Card;