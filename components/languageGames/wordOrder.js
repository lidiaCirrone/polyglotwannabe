import React, { useEffect, useState } from 'react';

// components
import Button from '../ui/button';

// modules
import { useRouter } from 'next/router'
import clsx from 'clsx';

// styles
import styles from './languageGames.module.css'

// utils
import { languageGames } from '@/utils/globalVariables';
import { shuffle } from '@/utils/playing';

function WordOrder({ language }) {

   const router = useRouter();
   const gameItem = languageGames[language.slug];

   const [state, setState] = useState({
      words: [],
      chosenWords: []
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
      setState({
         words: updatedWords,
         chosenWords: updatedChosenWords,
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
      <div className={clsx(styles["word-box"], "unselectable")} key={`word-order-${key}`} onClick={toggleWord(item)}>{item}</div>
   )

   const renderChosenWords = (item, key) => (
      <div className={clsx(styles["chosen-word-box"], "unselectable")} key={`chosen-word-${key}`} onClick={toggleWord(item)}>{item}</div>
   )

   const resetState = () => {
      const gameWords = structuredClone(gameItem.data.options);
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
      <>
         <p className={"bold margin-bottom"}>{gameItem.data.source}</p>
         <div className={styles["words-container"]}>{state.words.map(renderWords)}</div>
         <div className={styles["chosen-words-container"]}>{state.chosenWords.map(renderChosenWords)}</div>
         <Button label={"Reset"} onClick={resetState} />
      </>
   )
}

export default WordOrder;