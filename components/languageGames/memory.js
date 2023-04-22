import { useEffect, useState } from 'react';

// styles
import styles from './languageGames.module.css'

// utils
import { languageGames } from '@/utils/globalVariables';
import { shuffle } from '@/utils/playing';

function Memory({ language }) {

   const gameItem = languageGames[language];
   const [state, setState] = useState({
      cards: [],
      flippedCards: []
   })

   function renderCards() {
      return (
         state.cards.map((card, i) => {
            console.log("card: ", card);
            let isImage = card.content.includes(".png");
            return (
               <div className={styles["memory-card"]}>
                  {isImage ? <img src={card.content} alt={card.label} /> : <p>{card.content}</p>}
               </div>
            )
         })
      )
   }

   useEffect(() => {
      const cards = structuredClone(gameItem.data.cards);
      shuffle(cards);
      setState({
         ...state,
         cards
      })
   }, [])

   return (
      <div className={styles["memory-container"]}>
         {renderCards()}
      </div>
   )
}

export default Memory