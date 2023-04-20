import React, { useEffect, useState } from 'react';

// components
import Button from '../ui/button';

// modules
import clsx from 'clsx';

// styles
import styles from './languageGames.module.css'

// utils
import { languageGames } from '@/utils/globalVariables';
import { shuffle } from '@/utils/playing';

function WordOrder({ language }) {

   const gameItem = languageGames[language];

   const [state, setState] = useState({
      words: [],
      chosenWords: []
   })

   const toggleWord = (word) => () => {
      let updatedWords = state.words;
      let updatedChosenWords = state.chosenWords;
      console.log("\n\nupdatedWords: ", updatedWords);
      console.log("updatedChosenWords: ", updatedChosenWords);
      console.log("updatedWords.indexOf(word): ", updatedWords.indexOf(word));
      if (updatedWords.includes(word)) {
         console.log("tapped on default word");
         updatedWords.splice(updatedWords.indexOf(word), 1);
         console.log("updatedWords on default tap: ", updatedWords);
         updatedChosenWords.push(word);
         console.log("updatedChosenWords on default tap: ", updatedChosenWords);
      } else {
         console.log("tapped on chosen word");
         updatedChosenWords.splice(updatedChosenWords.indexOf(word), 1);
         console.log("updatedChosenWords on chosen tap: ", updatedChosenWords);
         updatedWords.push(word);
         console.log("updatedWords on chosen tap: ", updatedWords);
      }
      setState({
         words: updatedWords,
         chosenWords: updatedChosenWords,
      })
      setTimeout(() => {
         if (updatedWords.length === 0) {
            if (updatedChosenWords.join(" ") === gameItem.data.solution) {
               alert("CORRECT!")
            } else {
               alert("try again :(")
               resetState();
            }
         }
      }, 500)
   }

   const renderWords = (item, key) => (
      <div className={styles["word-box"]} key={`word-order-${key}`} onClick={toggleWord(item)}>{item}</div>
   )

   const renderChosenWords = (item, key) => (
      <div className={styles["chosen-word-box"]} key={`chosen-word-${key}`} onClick={toggleWord(DataTransferItem)}>{item}</div>
   )

   const resetState = () => {
      const gameWords = structuredClone(gameItem.data.options);
      console.log("gameWords on reset: ", gameWords);
      shuffle(gameWords);
      setState({
         words: gameWords,
         chosenWords: []
      })
   }

   useEffect(() => {
      const gameWords = structuredClone(gameItem.data.options);
      shuffle(gameWords);
      setState({
         ...state,
         words: gameWords
      })
   }, [])

   return (
      <div>
         <h2>Let's play!</h2>
         <p className={"margin-bottom"}>{gameItem.data.instructions}</p>
         <p className={clsx(["bold", "margin-bottom"])}>{gameItem.data.source}</p>
         <div className={styles["words-container"]}>{state.words.map(renderWords)}</div>
         <div className={styles["chosen-words-container"]}>{state.chosenWords.map(renderChosenWords)}</div>
         <Button label={"Reset"} onClick={resetState} />
      </div>
   )
}

export default WordOrder;