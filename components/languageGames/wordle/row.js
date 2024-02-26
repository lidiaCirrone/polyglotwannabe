import React from 'react'

// styles
import styles from './wordle.module.css'
import clsx from 'clsx';

function Row({ guess, currentGuess }) {

   const renderGuessLetter = (letter, i) => <div key={`letter-${i}`} className={styles[letter.color]}>{letter.key}</div>

   const renderCurrentGuessLetter = (letter, i) => (
      <div key={`current-letter-${i}`} className={styles['filled']}>{letter}</div>
   )

   const renderEmptySquare = (_, i) => (
      <div key={`square-${i}`}></div>
   )

   if (guess) {
      return (
         <div className={clsx(styles['row'], styles['past'])}>
            {guess.map(renderGuessLetter)}
         </div>
      )
   }

   if (currentGuess) {
      let letters = currentGuess.split('');

      return (
         <div className={clsx(styles['row'], styles['current'])}>
            {letters.map(renderCurrentGuessLetter)}
            {[...Array(6 - letters.length)].map(renderEmptySquare)}
         </div>
      )
   }

   return (
      <div className={styles['row']}>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
      </div>
   )
}

export default Row;