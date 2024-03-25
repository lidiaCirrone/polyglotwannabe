import React, { Fragment, useMemo, useState } from 'react';

// components
import Button from '../ui/button';

// modules
import clsx from 'clsx';
import { useRouter } from 'next/router'

// styles
import styles from './wordSearch.module.css'

// utils
import { languageGames } from '@/utils/globalVariables';
import { generateSolutionFromMatrix, generateWordsGrid } from '@/utils/playing';

function WordSearch({ language }) {

   const router = useRouter();
   const gameItem = languageGames[language.slug];
   const { matrix, indicator } = gameItem.data;
   const emptyGrid = useMemo(() => generateWordsGrid(12, 13), [])
   const solution = useMemo(() => generateSolutionFromMatrix(matrix, indicator), [matrix])

   const [grid, setGrid] = useState(emptyGrid);
   const [isCorrect, setIsCorrect] = useState(false);

   const toggleLetter = (r, c) => () => {
      const updatedGrid = structuredClone(grid);
      updatedGrid[r][c] = updatedGrid[r][c] === 0 ? 1 : 0;
      setGrid(updatedGrid);
      let verify = JSON.stringify(updatedGrid) === JSON.stringify(solution);
      if (verify) {
         setIsCorrect(true);
         setTimeout(() => {
            alert("CORRECT!")
            router.push({
               pathname: "/hello",
            })
         }, 250);
      }
   }

   const resetGrid = () => {
      setGrid(emptyGrid)
   }

   function renderGrid() {
      return (
         matrix.map((row, r) => (
            <Fragment key={r}>
               {row.map((cell, c) => (
                  <div key={c} className={clsx([styles.cell, "unselectable", grid[r][c] === 1 && styles.selected, isCorrect && grid[r][c] === 1 && styles.correct])} onClick={toggleLetter(r, c)}>{cell.slice(0, 1)}</div>
               ))}
            </Fragment>
         )
         ))
   }

   return (
      <>
         <div className={styles.grid}>
            {renderGrid()}
         </div>
         <Button label={"Reset"} onClick={resetGrid} disabled={!grid.find(row => row.includes(1))} />
      </>
   )
}

export default WordSearch;