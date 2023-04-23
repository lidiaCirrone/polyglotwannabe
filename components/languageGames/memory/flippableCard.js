// styles
import styles from "./memory.module.css"
import clsx from "clsx";

function FlippableCard({ card, onClick, flipped, disabled, isWrong }) {

   const { label, content, matched } = card;

   const wrappedContent = content.includes(".png") ? <img src={content} alt={label} /> : <p>{content}</p>;

   const handleCardFlip = () => {
      if (!disabled) {
         onClick(card)
      }
   }

   return (
      <div className={styles["card-container"]}>
         <div className={clsx(styles.card, flipped && styles.flipped, matched && styles.correct, flipped && isWrong && styles.wrong, disabled && styles.disabled)} onClick={handleCardFlip}>
            <div className={clsx(styles["card-back"])}>{wrappedContent}</div>
            <div className={styles["card-front"]} />
         </div>
      </div>
   )
}

export default FlippableCard