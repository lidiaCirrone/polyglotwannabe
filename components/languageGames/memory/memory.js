import { useEffect, useState } from 'react';

// components
import FlippableCard from './flippableCard';

// styles
import styles from './memory.module.css'

// utils
import { languageGames } from '@/utils/globalVariables';
import { shuffle } from '@/utils/playing';

function Memory({ language }) {

   const gameItem = languageGames[language];
   const [cards, setCards] = useState([]);
   const [cardOne, setCardOne] = useState(null);
   const [cardTwo, setCardTwo] = useState(null);
   const [disabled, setDisabled] = useState(false);
   const [isWrong, setIsWrong] = useState(false);

   const handleChoice = (card) => {
      console.log("handle choice card: ", card)
      cardOne ? setCardTwo(card) : setCardOne(card);
   }

   useEffect(() => {
      console.log("\n\ncardOne: ", cardOne);
      console.log("cardTwo: ", cardTwo);
      if (cardOne && cardTwo) {
         setDisabled(true);
         if (cardOne.label === cardTwo.label) {
            // cards match
            setCards(prevCards => {
               return prevCards.map(card => {
                  console.log("\n\ncard.label === cardOne.label: ", card.label === cardOne.label)
                  if (card.label === cardOne.label) {
                     return { ...card, matched: true }
                  } else {
                     return card
                  }
               })
            })
            resetTurn();
         } else {
            // cards don't match
            setTimeout(() => {
               setIsWrong(true);
            }, 200);
            setTimeout(() => {
               setIsWrong(false);
               resetTurn();
            }, 1100);
         }
      }

   }, [cardOne, cardTwo])

   function resetTurn() {
      setCardOne(null);
      setCardTwo(null);
      setDisabled(false)
   }

   // better to remove this use effect and just do 
   // `cards: gameItem.data.cards.sort(() => Math.random() - 0.5)`
   // on state initialization?

   useEffect(() => {
      const cards = structuredClone(gameItem.data.cards);
      shuffle(cards);
      setCards(cards);
   }, [])

   const renderCards = (card, i) => (
      <FlippableCard
         key={`card-${i}`}
         card={card}
         onClick={handleChoice}
         flipped={card === cardOne || card === cardTwo || card.matched}
         disabled={disabled || card === cardOne || card === cardTwo || card.matched}
         isWrong={isWrong}
      />
   )

   return (
      <div className={styles["container"]}>
         {cards.map(renderCards)}
      </div>
   )
}

export default Memory