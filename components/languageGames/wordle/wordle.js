// Thanks to The Net Ninja tutorial: https://www.youtube.com/watch?v=ZSWl5UwhHcs&list=PL4cUxeGkcC9gXdVXVJBmHpSI7zCEcjLUX

import useWordle from "@/hooks/useWordle";
import { useEffect } from "react";
import Grid from "./grid";

function Wordle({ solution }) {

   const { currentGuess, handleKeyup, guesses, isCorrect, turn } = useWordle(solution);

   useEffect(() => {
      window.addEventListener("keyup", handleKeyup);

      return () => window.removeEventListener("keyup", handleKeyup);
   }, [handleKeyup])

   useEffect(() => {
      console.log(guesses, turn, isCorrect);
   }, [guesses, turn, isCorrect])

   return (
      <div>
         <p>solution: {solution}</p>
         <p>currentGuess: {currentGuess}</p>
         <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      </div>
   );
}

export default Wordle;