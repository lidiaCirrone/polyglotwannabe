'use client'

import { useEffect, useState } from 'react';

// components
import FlippableCard from './flippableCard';

// styles
import styles from './memory.module.css'

// utils
import { languageGames } from '@/utils/globalVariables';
import { shuffle } from '@/utils/playing';
import { useRouter } from 'next/navigation';

// Thanks to The Net Ninja tutorial: https://www.youtube.com/watch?v=ZCKohZwGZMw&list=PL4cUxeGkcC9iQ7g2eoNXHCJBBBz40S_Lm

function Memory({ language }) {

   const router = useRouter();
   const gameItem = languageGames[language.slug];
   const [cards, setCards] = useState([]);
   const [cardOne, setCardOne] = useState(null);
   const [cardTwo, setCardTwo] = useState(null);
   const [disabled, setDisabled] = useState(false);
   const [isWrong, setIsWrong] = useState(false);

   const handleChoice = (card) => {
      cardOne ? setCardTwo(card) : setCardOne(card);
   }

   function resetTurn() {
      setCardOne(null);
      setCardTwo(null);
      setDisabled(false)
   }

   useEffect(() => {
      let matchedCards = cards.filter(card => card.matched);
      if (cards.length !== 0 && matchedCards.length === cards.length) {
         setTimeout(() => {
            alert("CORRECT!")
            router.push("/hello")
         }, 1000);
      }
   }, [cards])

   useEffect(() => {
      if (cardOne && cardTwo) {
         setDisabled(true);
         if (cardOne.label === cardTwo.label) {
            // cards match
            setCards(prevCards => {
               return prevCards.map(card => {
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
            }, 1000);
         }
      }

   }, [cardOne, cardTwo])

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