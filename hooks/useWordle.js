import { useState } from "react"

const useWordle = (solution) => {

   const maxLength = solution.length;
   const [turn, setTurn] = useState(0);
   const [currentGuess, setCurrentGuess] = useState("");
   const [guesses, setGuesses] = useState([...Array(6)]); // each guess is an array
   const [history, setHistory] = useState([]); // each guess is a string
   const [isCorrect, setIsCorrect] = useState(false);


   /**
    * format a guess into an array of letter objects
    * e.g. `[{key: "a", color: "yellow"}]`
    */
   const formatGuess = () => {
      console.log(`formatting the guess: ${currentGuess}`);
      let solutionArray = [...solution];
      let formattedGuess = [...currentGuess].map((letter) => {
         return { key: letter, color: "grey" }
      });

      // find any green letters
      formattedGuess.forEach((letter, i) => {
         if (solutionArray[i] === letter.key) {
            formattedGuess[i].color = "green";
            solutionArray[i] = null;
         }
      })

      // find any yellow letters
      formattedGuess.forEach((letter, i) => {
         if (solutionArray.includes(letter.key) && letter.color !== "green") {
            formattedGuess[i].color = "yellow";
            solutionArray[solutionArray.indexOf(letter.key)] = null;
         }
      })

      return formattedGuess;
   }

   /**
    * add a new guess to the guesses state
    * update the isCorrect state if the guess is correct
    * add 1 to the turn state
    */
   const addNewGuess = (formattedGuess) => {
      if (currentGuess === solution) {
         setIsCorrect(true);
      }
      setGuesses((previousGuesses) => {
         let newGuesses = [...previousGuesses];
         newGuesses[turn] = formattedGuess;
         return newGuesses;
      })
      setHistory((previousHistory) => {
         return [...previousHistory, currentGuess]
      })
      setTurn((previousTurn) => {
         return previousTurn + 1;
      })
      setCurrentGuess("");
   }

   /**
    * handle keyup event & track current guess
    * if user presses enter, add the new guess
    */
   const handleKeyup = ({ key }) => {
      console.log(`the user pressed ${key}`);

      // handle enter
      if (key === "Enter") {
         // only add guess if turn is less than 5
         if (turn > 5) {
            console.log("you used all your guesses");
            return;
         }
         // do not allow duplicate words
         if (history.includes(currentGuess)) {
            console.log("you already tried that word");
            return;
         }
         // check word is maxLength chars long
         if (currentGuess.length !== maxLength) {
            console.log(`word must be ${maxLength} chars long`);
            return;
         }
         const formatted = formatGuess();
         console.log(formatted);
         addNewGuess(formatted);
      }

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