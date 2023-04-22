// styles
import styles from './languageGames.module.css'

// utils
import { languageGames } from '@/utils/globalVariables';

function Memory({ language }) {
   const gameItem = languageGames[language];
   const { cards } = gameItem.data;

   function renderCards() {
      return (
         cards.map((card, i) => {
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

   return (
      <div className={styles["memory-container"]}>
         {renderCards()}
      </div>
   )
}

export default Memory