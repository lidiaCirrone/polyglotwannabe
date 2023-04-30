import { useEffect, useState } from "react";

// modules
import clsx from "clsx";
import { useRouter } from 'next/router'

// styles
import styles from "./color.module.css"

// utils
import { createColorGameSolution, languageGames } from "@/utils/globalVariables";

function Color({ language }) {

   const router = useRouter();
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
      currentWord.selected = currentWord.selected === state.currentColor.type ? "" : state.currentColor.type;
      setState({
         ...state,
         words: updatedWords
      })
   }

   const renderColors = ((item, i) => <div style={{ backgroundColor: item.color }} className={clsx
      (styles.color, "unselectable", state.currentColor.color !== item.color && styles.opacity)} key={`color-${i}`} onClick={setCurrentColor(item)}>{item.type}</div>)

   const renderWords = ((item, i) =>
      <div key={`word-${i}`} className={clsx(styles.word, "unselectable")} style={{ backgroundColor: item.selected ? getColorFromType(item.selected) : "transparent" }} onClick={setWordColor(item.id)}>{item.word}</div>
   )

   useEffect(() => {
      let missingWords = state.words.filter(item => item.type && item.type !== item.selected);
      if (missingWords.length === 0) {
         setTimeout(() => {
            alert("CORRECT!")
            router.push({
               pathname: "/hello",
            })
         }, 250);
      }
   }, [state.words])

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