import React, { useState } from "react";

import Card from "./Card";
import CardsData from "../../Data/CardsData";
import "../../Assets/css/Main.css";

const Main = () => {

    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [cards, setCards] = useState(CardsData);

    const incrementScore = () => {
        setCurrentScore(currentScore + 1);
    }
    
    const resetScore = () => {
        setCurrentScore(0);
    }
    
    const resetCards = () => {
        let newCards = cards;
        for (let i = 0; i < newCards.length; i++) {
            let card = newCards[i];
            card.touched = false;
        }
        return newCards;
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

    const shuffleArray = (array) => {
        var copy = [], n = array.length, i;
        
        // While there remain elements to shuffle…
        while (n) {
        
            // Pick a remaining element…
            i = Math.floor(Math.random() * array.length);
        
            // If not already shuffled, move it to the new array.
            if (i in array) {
            copy.push(array[i]);
            delete array[i];
            n--;
            }
        }
        return copy;
    }

    const toggleTouchedCard = (position) => {
        let newCards = cards; 
        newCards[position].touched = true;
        return newCards;
    }

    const checkAnswer = (e) => {
        e.preventDefault();
        const selectedID = e.target.classList[2];
        const positionOfCardTouched = getPositionOfCardTouched(selectedID);
        if (positionOfCardTouched != -1) {
            setCards(toggleTouchedCard(positionOfCardTouched));
            setCards(shuffleArray(cards));
            incrementScore();
        } else {
            storeBestScore();
            resetScore();
            setCards(resetCards());
            setCards(shuffleArray(cards));
        }
    }

    return (
       <div className="main-container">
           <div className="main-title">MEMORY GAME</div>
           <div className="instructions">Choose a president without repetition.</div>
           <div className="scores">
                <div className="current-score score">Score: {currentScore}</div>
                <div className="best-score score">Best Score: {bestScore}</div>
           </div>
           <div className="cards-container">
            {cards.map((card) => {
                return <Card card={card} onClick={checkAnswer}/>
            })}
           </div>
       </div>
    )
}

export default Main;