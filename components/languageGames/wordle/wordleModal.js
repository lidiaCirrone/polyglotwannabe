import React from 'react';
import styles from './wordle.module.css';

function WordleModal({ isCorrect, turn, solution }) {
   return (
      <div className={styles["modal"]}>
         {isCorrect ? (
            <div>
               <h1>You win!</h1>
               <p className={styles["solution"]}>{solution}</p>
               <p>You found the solution in {turn} guess{turn !== 1 && 'es'} :)</p>
            </div>
         ) : (
            <div>
               <h1>Never mind!</h1>
               <p className={styles["solution"]}>{solution}</p>
               <p>Better luck next time :)</p>
            </div>
         )}
      </div>
   )
}

export default WordleModal;