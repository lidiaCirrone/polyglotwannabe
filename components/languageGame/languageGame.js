import React, { useState } from 'react';

// modules
import clsx from 'clsx';

// styles
import styles from './languageGame.module.css'

// utils
import { languageGames } from '@/utils/globalVariables';
import { shuffle } from '@/utils/playing';

function LanguageGame({ language }) {

   console.log("\n\nlanguageGame");
   console.log("language: ", language);
   const gameItem = languageGames[language];
   console.log("gameItem: ", gameItem);
   const words = gameItem.data.options;
   shuffle(words);

   const [chosenWords, setChosenWords] = useState([]);

   // if gameItem.type === "wordOrder"

   const renderWords = (item, key) => (
      <div className={styles["word-box"]} key={`word-order-${key}`}>{item}</div>
   )

   const renderChosenWords = (item, key) => (
      <div className={styles["word-box"]} key={`chosen-word-${key}`}>{item}</div>
   )

   return (
      <>
         <div>
            <h2>Let's play!</h2>
            <p className={"margin-bottom"}>{gameItem.data.instructions}</p>
            <p className={clsx(["bold", "margin-bottom"])}>{gameItem.data.source}</p>
            <div className={styles["chosen-words-container"]}>{chosenWords.map(renderChosenWords)}</div>
            <div className={styles["words-container"]}>{words.map(renderWords)}</div>
         </div>
      </>
   )
}

export default LanguageGame;