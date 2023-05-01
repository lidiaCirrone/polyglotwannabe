// Thanks to The Net Ninja tutorial: https://www.youtube.com/watch?v=ZSWl5UwhHcs&list=PL4cUxeGkcC9gXdVXVJBmHpSI7zCEcjLUX

import useWordle from "@/hooks/useWordle";
import { useEffect } from "react";

function Wordle({ solution }) {

   const { currentGuess, handleKeyup } = useWordle(solution);

   useEffect(() => {
      window.addEventListener("keyup", handleKeyup);

      return () => window.removeEventListener("keyup", handleKeyup);
   }, [handleKeyup])

   return (
      <div>
         <p>solution: {solution}</p>
         <p>currentGuess: {currentGuess}</p>
      </div>
   );
}

export default Wordle;