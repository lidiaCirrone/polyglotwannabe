// Thanks to The Net Ninja tutorial: https://www.youtube.com/watch?v=ZSWl5UwhHcs&list=PL4cUxeGkcC9gXdVXVJBmHpSI7zCEcjLUX

import useWordle from "@/hooks/useWordle";
import { useEffect } from "react";
import Grid from "./grid";
import Keypad from "./keypad";

function Wordle({ solution }) {

   const { currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys } = useWordle(solution);

   useEffect(() => {
      window.addEventListener("keyup", handleKeyup);

      if (isCorrect) {
         alert("congrats, you win!");
         window.removeEventListener("keyup", handleKeyup)
      }

      if (turn > 5) {
         alert("unlucky, out of guesses");
         window.removeEventListener("keyup", handleKeyup)
      }

      return () => window.removeEventListener("keyup", handleKeyup);
   }, [handleKeyup, isCorrect, turn])

   return (
      <div>
         <p>solution: {solution}</p>
         <p>currentGuess: {currentGuess}</p>
         <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
         <Keypad usedKeys={usedKeys} />
      </div>
   );
}

export default Wordle;