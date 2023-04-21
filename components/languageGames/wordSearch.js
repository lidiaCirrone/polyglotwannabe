import React, { useEffect, useMemo, useRef, useState } from 'react';

// components
import Button from '../ui/button';

// modules
import clsx from 'clsx';

// styles
import styles from './languageGames.module.css'

// utils
import { languageGames } from '@/utils/globalVariables';
import { generateSolutionFromMatrix, generateWordsGrid } from '@/utils/playing';

function WordSearch({ language }) {

   const gameItem = languageGames[language];
   const { matrix } = gameItem.data;
   const emptyGrid = useMemo(() => generateWordsGrid(12, 13), [])
   const solution = useMemo(() => generateSolutionFromMatrix(matrix, "-"), [matrix])

   const [grid, setGrid] = useState(emptyGrid);
   const numbersOfTaps = useRef(0);

   const toggleLetter = (r, c) => () => {
      const updatedGrid = structuredClone(grid);
      updatedGrid[r][c] = updatedGrid[r][c] === 0 ? 1 : 0;
      setGrid(updatedGrid);
      if (JSON.stringify(updatedGrid) === JSON.stringify(solution)) {
         setTimeout(() => {
            alert("CORRECT!")
         }, 250);
      }
      numbersOfTaps.current++;
      console.log("numbersOfTaps.current: ", numbersOfTaps.current)
   }

   const resetGrid = () => {
      setGrid(emptyGrid)
   }

   useEffect(() => {
      if (numbersOfTaps.current !== 0 && numbersOfTaps.current % 20 === 0) {
         console.log("need a hint?")
      }
   }, [numbersOfTaps.current])

   function renderGrid() {
      return (
         matrix.map((row, r) => (
            <div key={r} className={styles.row}>
               {row.map((column, c) => (
                  <div key={c} className={clsx([styles.column, grid[r][c] === 1 && styles.selected])} onClick={toggleLetter(r, c)}>{column.slice(0, 1)}</div>
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
         <Button label={"Reset"} onClick={resetGrid} />
      </>
   )
}

export default WordSearch;