// styles
import styles from "./memory.module.css"
import clsx from "clsx";

function FlippableCard({ card, onClick, flipped, disabled }) {

   const { label, content, matched } = card;

   const wrappedContent = content.includes(".png") ? <img src={content} alt={label} /> : <p>{content}</p>;

   const handleCardFlip = () => {
      if (!disabled) {
         onClick(card)
      }
   }

   return (
      <div className={styles["card-container"]}>
         <div className={clsx(styles["card"], flipped && styles["flipped"], matched && styles["correct"])} onClick={handleCardFlip}>
            <div className={clsx(styles["card-back"])}>{wrappedContent}</div>
            <div className={styles["card-front"]} />
         </div>
      </div>
   )
}

export default FlippableCard