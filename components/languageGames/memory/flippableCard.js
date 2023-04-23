import { useState } from "react"

// modules
import { CSSTransition } from "react-transition-group"

// styles
import styles from "./memory.module.css"

function FlippableCard({ card, onClick }) {

   const content = card.content.includes(".png") ? <img src={card.content} alt={card.label} /> : <p>{card.content}</p>;
   const transitionClassNames = {
      enter: styles["flipped-enter"],
      enterActive: styles["flipped-enter-active"],
      enterDone: styles["flipped-enter-done"],
      exit: styles["flipped-exit"],
      exitActive: styles["flipped-exit-active"],
      exitDone: styles["flipped-exit-done"]
   }

   const [isFlipped, setIsFlipped] = useState(false)

   function handleCardFlip() {
      console.log("card flip id: ", card.id)
      setIsFlipped((current) => !current);
      onClick(card.id)
   }

   return (
      <div className={styles["card-container"]}>
         <CSSTransition
            in={isFlipped}
            timeout={300}
            classNames={transitionClassNames}
         >
            <div className={styles["card"]} onClick={handleCardFlip}>
               <div className={styles["card-back"]}>{content}</div>
               <div className={styles["card-front"]}>?</div>
            </div>
         </CSSTransition>
      </div>
   )
}

export default FlippableCard