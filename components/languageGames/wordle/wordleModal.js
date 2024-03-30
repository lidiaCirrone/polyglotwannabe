import React from 'react';
import styles from './wordle.module.css';

function WordleModal({ isCorrect, turn, solution }) {
   return (
      <div className={styles["modal"]}>
         {isCorrect ? (
            <div>
               <h2>That's correct!</h2>
               <p className={styles["solution"]}>{solution}</p>
               <p>You found the solution in {turn} guess{turn !== 1 && 'es'} :)</p>
            </div>
         ) : (
            <div>
               <h2>Not quite!</h2>
               <p className={styles["solution"]}>{solution}</p>
               <p>Better luck next time :)</p>
            </div>
         )}
      </div>
   )
}

export default WordleModal;