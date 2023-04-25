import { useState } from "react";

// modules
import clsx from "clsx";

// styles
import styles from "./color.module.css"

// utils
import { createColorGameSolution, languageGames } from "@/utils/globalVariables";

function Color({ language }) {

   const gameData = languageGames[language.slug].data;
   const { colors } = gameData;

   const [state, setState] = useState({
      words: createColorGameSolution(gameData),
      currentColor: colors[0]
   })

   function getColorFromType(type) {
      let item = colors.find(item => item.type === type)
      return item.color;
   }

   const setCurrentColor = (item) => () => {
      setState({
         ...state,
         currentColor: item
      })
   }

   const setWordColor = (id) => () => {
      const updatedWords = structuredClone(state.words);
      const currentWord = updatedWords.find(item => item.id === id);
      console.log("id: ", id);
      console.log("currentWord: ", currentWord);
      currentWord.type = currentWord.type === state.currentColor.type ? "" : state.currentColor.type;
      console.log("currentWord after: ", currentWord);
      setState({
         ...state,
         words: updatedWords
      })
   }

   const renderColors = ((item, i) => <div style={{ backgroundColor: item.color }} className={clsx
      (styles.color, state.currentColor.color !== item.color && styles.opacity)} key={`color-${i}`} onClick={setCurrentColor(item)}>{item.type}</div>)

   const renderWords = ((item, i) =>
      <div key={`word-${i}`} className={styles.word} style={{ backgroundColor: item.type ? getColorFromType(item.type) : "transparent" }} onClick={setWordColor(item.id)}>{item.word}</div>
   )

   return (
      <div className={styles["container"]}>
         <div className={styles["colors-container"]}>
            {colors.map(renderColors)}
         </div>
         <div className={styles["words-container"]}>
            {state.words.map(renderWords)}
         </div>
      </div>
   )

}

export default Color;