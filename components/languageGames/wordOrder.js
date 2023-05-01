import React, { useEffect, useState } from 'react';

// components
import Button from '../ui/button';

// modules
import { useRouter } from 'next/router'
import clsx from 'clsx';

// styles
import styles from './wordOrder.module.css'

// utils
import { languageGames } from '@/utils/globalVariables';
import { shuffle } from '@/utils/playing';

function WordOrder({ language }) {

   const router = useRouter();
   const gameItem = languageGames[language.slug];

   const [state, setState] = useState({
      words: null,
      chosenWords: [],
      isCorrect: false
   })

   const toggleWord = (word) => () => {
      let updatedWords = state.words;
      let updatedChosenWords = state.chosenWords;
      if (updatedWords.includes(word)) {
         updatedWords.splice(updatedWords.indexOf(word), 1);
         updatedChosenWords.push(word);
      } else {
         updatedChosenWords.splice(updatedChosenWords.indexOf(word), 1);
         updatedWords.push(word);
      }
      let isCorrect = updatedWords.length === 0 && updatedChosenWords.join(" ") === gameItem.data.solution;
      setState({
         ...state,
         words: updatedWords,
         chosenWords: updatedChosenWords,
         isCorrect
      })
      setTimeout(() => {
         if (updatedWords.length === 0) {
            if (updatedChosenWords.join(" ") === gameItem.data.solution) {
               alert("CORRECT!")
               router.push({
                  pathname: "/hello",
               })
            } else {
               alert("try again :(")
               resetState();
            }
         }
      }, 500)
   }

   const renderWords = (item, key) => (
      <div className={clsx(styles.word, "unselectable")} key={`word-order-${key}`} onClick={toggleWord(item)}>{item}</div>
   )

   const renderChosenWords = (item, key) => (
      <div className={clsx(styles.chosen, "unselectable", state.isCorrect && styles.correct)} key={`chosen-word-${key}`} onClick={toggleWord(item)}>{item}</div>
   )

   const resetState = () => {
      const gameWords = structuredClone(gameItem.data.options);
      shuffle(gameWords);
      setState({
         words: gameWords,
         chosenWords: [],
         isCorrect: false
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
      <>
         <p className={"bold margin-bottom"}>{gameItem.data.source}</p>
         {state.words &&
            <div className={styles["container"]}>{state.words.map(renderWords)}</div>
         }
         <div className={clsx(styles["chosen-container"], state.isCorrect && styles["container-correct"])}>{state.chosenWords.map(renderChosenWords)}</div>
         <Button label={"Reset"} onClick={resetState} />
      </>
   )
}

export default WordOrder;