import { useState } from "react";

// components
import Button from "../ui/button";

// modules
import { useRouter } from "next/router";
import clsx from "clsx";

// styles
import styles from "./fillTheGaps.module.css"

// utils
import { createFillTheGapsGameSolution, languageGames } from "@/utils/globalVariables";

function mapWords(array) {
   return array.map(
      (word, i) => [i, word]
   )
}

function FillTheGaps({ language }) {

   const router = useRouter();
   const gameData = languageGames[language.slug].data;
   const { solution } = gameData;
   const text = createFillTheGapsGameSolution(gameData);

   // TO-DO: instad of mapping here, create text already mapped
   const mappedSolution = Object.fromEntries(mapWords(solution))
   const [state, setState] = useState({
      answers: {},
      solution: mappedSolution,
   })

   const setInputValue = (i) => (event) => {
      let value = event.target.value;
      let updatedAnswers = structuredClone(state.answers);
      updatedAnswers[i] = value;
      setState({
         ...state,
         answers: updatedAnswers
      })
   }

   const renderText = ((word, i) => {
      return (
         <div
            key={`word-${i}`}
            className={clsx(styles.word, "unselectable")}
         >
            {word === "..." ? <input
               type="text"
               className={styles.input}
               onChange={setInputValue(i)}
               placeholder="..."
            /> : word}
         </div>)
   })

   function checkAnswer() {
      if (Object.values(state.answers).join(";") === Object.values(state.solution).join(";")) {
         setTimeout(() => {
            alert("CORRECT!")
            router.push({
               pathname: "/hello",
            })
         }, 250);
      } else {
         setTimeout(() => {
            alert("try again :(")
            //  TO-DO
            // resetState();
         }, 250);
      }
   }

   return (
      <>
         <div className={styles.container}>
            {text.map(renderText)}
         </div>
         <Button label={"Controlla"} onClick={checkAnswer} disabled={Object.values(state.solution).length != Object.values(state.answers).filter(item => item.length).length} />
      </>
   )
}

export default FillTheGaps;