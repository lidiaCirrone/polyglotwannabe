import { useEffect, useRef, useState } from "react";

import { useRouter } from "next/router";

// styles
import styles from "./fillTheGaps.module.css"

// utils
import { createFillTheGapsGameSolution, languageGames } from "@/utils/globalVariables";

function FillTheGaps({ language }) {

   const router = useRouter();
   const gameData = languageGames[language.slug].data;
   const { solution } = gameData;

   const inputs = useRef([]);

   const [state, setState] = useState({
      text: createFillTheGapsGameSolution(gameData),
      answers: []
   })

   const saveInputValue = () => {
      console.log("saveInputValue")
   }

   const renderText = ((word, i) => {
      return (
         <div
            key={`word-${i}`}
            className={styles.word}
         >
            {word === "..." ? <input
               type="text"
               className={styles.input}
               ref={(ele) => { if (word === "...") inputs.current.push(ele) }}
               onBlur={saveInputValue}
            /> : word}
         </div>)
   })

   useEffect(() => {
      console.log("\n\ninputs: ", inputs.current);
   }, [inputs.current])

   return (
      <div className={styles.container}>
         {state.text.map(renderText)}
      </div>
   )
}

export default FillTheGaps;