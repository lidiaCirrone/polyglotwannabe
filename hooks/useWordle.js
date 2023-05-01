import { useState } from "react"

const useWordle = (solution) => {

   const maxLength = solution.length;
   const [turn, setTurn] = useState(0);
   const [currentGuess, setCurrentGuess] = useState("");
   const [guesses, setGuesses] = useState([]); // each guess is an array
   const [history, setHistory] = useState([]); // each guess is a string
   const [isCorrect, setIsCorrect] = useState(false);


   /**
    * format a guess into an array of letter objects
    * e.g. `[{key: "a", color: "yellow"}]`
    */
   const formatGuess = () => {

   }

   /**
    * add a new guess to the guesses state
    * update the isCorrect state if the guess is correct
    * add 1 to the turn state
    */
   const addNewGuess = () => {

   }

   /**
    * handle keyup event & track current guess
    * if user presses enter, add the new guess
    */
   const handleKeyup = ({ key }) => {
      console.log(`the user pressed ${key}`);

      // handle backspace
      if (key === "Backspace") {
         setCurrentGuess((previous) => {
            return previous.slice(0, -1);
         })
         return;
      }

      // handle letters
      if (/^[A-Za-z]$/.test(key)) {
         if (currentGuess.length < maxLength) {
            setCurrentGuess((previous) => {
               return previous + key;
            })
         }
      }

   }

   return {
      turn,
      currentGuess,
      guesses,
      isCorrect,
      handleKeyup
   }

}

export default useWordle;