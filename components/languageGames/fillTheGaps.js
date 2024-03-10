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
   const mappedInputs = Object.fromEntries(mapWords(text).filter(item => item[1] === "..."))
   console.log("mappedInputs: ", mappedInputs)
   const ids = Object.keys(mappedInputs);
   console.log("ids: ", ids)
   const mappedSolution = Object.fromEntries(mapWords(solution))
   console.log("mappedSolution: ", mappedSolution)

   const [state, setState] = useState({
      answers: mappedInputs,
      solution: mappedSolution,
   })

   const setInputValue = (i) => (event) => {
      let value = event.target.value;
      console.log("value: ", value)
      console.log("i: ", i)
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
            /> : word}
         </div>)
   })

   function checkAnswer() {
      console.log("\n\nstate.answers: ", state.answers);
      console.log("state.solution: ", state.solution)
      if (Object.keys(state.solution).length !== 0 && JSON.stringify(state.answers) === JSON.stringify(state.solution)) {
         setTimeout(() => {
            alert("CORRECT!")
            router.push({
               pathname: "/hello",
            })
         }, 250);
      }
   }

   return (
      <>
         <div className={styles.container}>
            {text.map(renderText)}
         </div>
         <Button label={"Controlla"} onClick={checkAnswer} />
      </>
   )
}

export default FillTheGaps;