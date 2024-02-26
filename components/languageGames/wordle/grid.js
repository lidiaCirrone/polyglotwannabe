import React from 'react'
import Row from './row';

function Grid({ currentGuess, guesses, turn }) {

   const renderGuesses = (guess, i) => {
      if (turn === i) {
         return <Row key={`row-${i}`} currentGuess={currentGuess} />
      }
      return <Row key={`row-${i}`} guess={guess} />
   }

   return (
      <div>
         {guesses.map(renderGuesses)}
      </div>
   )
}

export default Grid;