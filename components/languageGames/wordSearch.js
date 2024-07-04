import React, { Fragment, useEffect, useMemo, useState } from 'react';

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
   const [selectedTiles, setSelectedTiles] = useState([])
   const [hoveredTiles, setHoveredTiles] = useState([])

   const isCurrentlyHovered = (r,c) => {
    if( !hoveredTiles.length) return false
    return hoveredTiles.find(tile => tile.r === r && tile.c === c)
   }

   const toggleLetter = (r, c) => () => {
    console.log("\n\n\ntoggleLetter")
    console.log("selectedTiles", selectedTiles)
    console.log("r", r)
    console.log("c", c)
    console.log("grid[r][c]", grid[r][c])
      let newSelectedTiles = selectedTiles.length === 1 ? [...selectedTiles, {r,c}] : [{r,c}];
      setSelectedTiles(newSelectedTiles);
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

   function checkIfAdjacent(lastTile, currentTile) {
    const {r: lastRow, c: lastColumn} = lastTile;
    const {r: currentRow, c: currentColumn} = currentTile;
    return currentRow === lastRow - 1 || /* currentRow === */ lastRow + 1
      || currentColumn === lastColumn - 1 || lastColumn + 1
   }

   const hoverLetter = (r,c) => () => {
    if (selectedTiles.length === 1) {
      console.log("\n\n\nhoverLetter")
      console.log("selectedTiles", selectedTiles)
      if (!hoveredTiles.length || (hoveredTiles.length === 2 && checkIfAdjacent({r, c}, {r: hoveredTiles[hoveredTiles.length - 1].r, c: hoveredTiles[hoveredTiles.length - 1].c}))) {
        setHoveredTiles(allHovered => [...allHovered, {r, c}])
      }
    }
   }

   useEffect(() => {
    console.log("\n\n\nselectedTiles", selectedTiles)
    if (selectedTiles.length === 2) {

    }
   }, [selectedTiles.length])

   const resetGrid = () => {
      setGrid(emptyGrid)
   }

   function renderGrid() {
      return (
         matrix.map((row, r) => (
            <Fragment key={r}>
               {row.map((cell, c) => (
                  <div key={c} className={clsx([
                    styles.cell, 
                    "unselectable",
                    grid[r][c] === 1 && styles.selected, 
                    isCorrect && grid[r][c] === 1 && styles.correct,
                    isCurrentlyHovered(r,c) && styles.hovered
                  ])} onClick={toggleLetter(r, c)} onMouseOver={hoverLetter(r, c)}>{cell.slice(0, 1)}</div>
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