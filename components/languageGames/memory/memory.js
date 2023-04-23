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
   const [state, setState] = useState({
      cards: [],
      flippedCards: []
   })

   const toggleCard = (toggledId) => {
      console.log("flipped card toggledId: ", toggledId);
      console.log("flipped card : ", state.cards[toggledId]);

      // let flippedCards = structuredClone(state.flippedCards);
      // let flippedCards = [...state.flippedCards];

      // if (flippedCards.length === 2)
      // check()
      // reset()
      // return so it exits?

      // let idIndex = flippedCards.indexOf(toggledId);
      // console.log("idIndex: ", idIndex);
      // if (idIndex !== -1) {
      //    flippedCards = flippedCards.filter(id => id !== toggledId)
      // } else {
      //    flippedCards.push(toggledId)
      // }
      // setState({
      //    ...state,
      //    flippedCards
      // })
   }

   // better to remove this use effect and just do 
   // `cards: gameItem.data.cards.sort(() => Math.random() - 0.5)`
   // on state initialization?

   useEffect(() => {
      const cards = structuredClone(gameItem.data.cards);
      shuffle(cards);
      setState({
         ...state,
         cards
      })
   }, [])

   const renderCards = (card, i) => <FlippableCard key={`card-${i}`} card={card} onClick={toggleCard} />

   return (
      <div className={styles["container"]}>
         {state.cards.map(renderCards)}
      </div>
   )
}

export default Memory