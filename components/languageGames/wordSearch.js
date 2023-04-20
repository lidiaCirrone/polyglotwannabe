import React, { useEffect, useState } from 'react';

// components
import Button from '../ui/button';

// modules
import clsx from 'clsx';

// styles
import styles from './languageGames.module.css'

// utils
import { languageGames } from '@/utils/globalVariables';

function WordSearch({ language }) {

   const gameItem = languageGames[language];
   const { matrix } = gameItem.data;
   console.log("item: ", gameItem)

   const renderGrid = () => {
      return (
         matrix.map((row, i) => (
            <div key={i} className={styles.row}>
               {row.map((column, j) => (
                  <div key={j} className={clsx([styles.column, column.includes("-") && styles.selected])}>{column.slice(0, 1)}</div>
               ))}
            </div>
         )
         ))
   }

   return (
      <>
         <div className={styles.grid}>
            {renderGrid()}
         </div>
         {/* <Button label={"Reset"} onClick={resetState} /> */}
      </>
   )
}

export default WordSearch;