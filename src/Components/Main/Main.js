import React, { useState } from "react";

import Card from "./Card";
import CardsData from "../../Data/CardsData";
import "../../Assets/css/Main.css";

const Main = () => {

    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [cards, setCards] = useState(CardsData);

    const incrementScore = (e) => {
        setCurrentScore(currentScore + 1);
    }

    const storeBestScore = () => {
        if (currentScore > bestScore) {
            setBestScore(currentScore);
        }
    }

    const getPositionOfCardTouched = (id) => {
        for (let i = 0; i < cards.length; i++) {
            let card = cards[i];
            if (card.id === id) {
                if (card.touched) {
                    return -1;
                } else {
                    return i;
                }
            }
        }
    }

    const toggleTouchedCard = (position) => {
        let newCards = cards; 
        newCards[position].touched = true;
        return newCards;
    }

    const touchCard = (position) => {
        let newCards = cards;
        newCards[position].touched = true;
        console.log(newCards);
        console.log(cards);
        return newCards;
    }

    const checkAnswer = (e) => {
        e.preventDefault();
        const selectedID = e.target.classList[2];
        const positionOfCardTouched = getPositionOfCardTouched(selectedID);
        if (positionOfCardTouched != -1) {
            setCards(toggleTouchedCard(positionOfCardTouched));
            incrementScore();
        }
    }

    return (
       <div className="main-container">
           <div className="main-title">MEMORY GAME</div>
           <div className="current-score score">Score: {currentScore}</div>
           <div className="best-score score">Best Score: {bestScore}</div>
           <div className="cards-container">
            {cards.map((card) => {
                return <Card card={card} onClick={checkAnswer}/>
            })}
           </div>
       </div>
    )
}

export default Main;