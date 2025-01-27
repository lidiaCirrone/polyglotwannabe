'use client'

import React, { Fragment, useEffect, useMemo, useRef, useState } from 'react';

// components
import Button from '../ui/button';

// modules
import clsx from 'clsx';

// styles
import styles from './wordSearch.module.css'

// utils
import { languageGames } from '@/utils/globalVariables';
import { generateSolutionFromMatrix, generateWordsGrid } from '@/utils/playing';

const GRID_ROWS = 12;
const GRID_COLUMNS = 13;

function WordSearch({ language }) {

   const gameItem = languageGames[language.slug];
   const { matrix, indicator } = gameItem.data;
   const emptyGrid = useMemo(() => generateWordsGrid(GRID_ROWS, GRID_COLUMNS), [])
   const solution = useMemo(() => generateSolutionFromMatrix(matrix, indicator), [matrix])

   const tiles = useRef({});
   for (let n = 0; n < GRID_ROWS; n++) {
    tiles.current[n] = {}
   }
  //  const gridRef = useRef();

   const [grid, setGrid] = useState(emptyGrid);
  //  const [isCorrect, setIsCorrect] = useState(false);
   const [currentLetters, setCurrentLetters] = useState([])
   const [allSelectedLetters, setAllSelectedLetters] = useState([])
   const [selectedIds, setSelectedIds] = useState([])
  //  const [selectedTiles, setSelectedTiles] = useState([])
   const [hoveredTiles, setHoveredTiles] = useState([])
  //  const [currentDirection, setCurrentDirection] = useState(null)

  useEffect(() => console.log("\n\n grid", grid))
  useEffect(() => console.log("currentLetters", currentLetters))
  useEffect(() => console.log("allSelectedLetters", allSelectedLetters))
  useEffect(() => console.log("selectedIds", selectedIds))
  useEffect(() => console.log("hoveredTiles", hoveredTiles))

   const isCurrentlyHovered = (r,c) => {
    if( !hoveredTiles.length) return false
    return (currentLetters[0].r === r && currentLetters[0].c === c) || hoveredTiles.find(tile => tile.r === r && tile.c === c)
   }

   // TO-DO
  //  - gestire quando l'utente ha selezionato una prima lettera e torna indietro
  //  - aggiungere a `currentLetters` solo lettere non ancora presenti

   const toggleLetter = (r, c) => () => {

    let newCurrentLetters = [...currentLetters]
    let newHovered = [...hoveredTiles]
    if (!newCurrentLetters.length){
      // first click, sets first letter
      newCurrentLetters = [{r,c}]
    } else if (newCurrentLetters.length === 1) {
      // second click
      const firstLetter = newCurrentLetters[0]
      let newAllSelectedLetters = [...allSelectedLetters]
      let newSelectedIds = [...selectedIds]
      if (firstLetter.r === r && firstLetter.c === c) {
        // if first and second letter match, means that the user changed their mind so need to remove them
        for (let i = 0; i < newCurrentLetters.length; i++) {
          const current = newCurrentLetters[i];
          let foundLetterIndex = newAllSelectedLetters.findIndex(selected => selected.r === current.r && selected.c === current.c)
          newAllSelectedLetters.splice(foundLetterIndex, 1)
          let foundIdIndex = newSelectedIds.findIndex(id => id === `tile-${r}-${c}`)
          newSelectedIds.splice(foundIdIndex, 1)
        }
      } else {
        // completes word
        newCurrentLetters.push(...newHovered)
        newAllSelectedLetters.push(...newCurrentLetters)
        newSelectedIds.push(...newCurrentLetters.map(({r: row, c: col}) => `tile-${row}-${col}`))
        // for (let i = 0; i < newCurrentLetters.length; i++) {
        //   const {r: row, c: col} = newCurrentLetters[i];
        //   console.log("i",i)
        //   console.log("row, col",row, col)
        //   const currentTile = tiles.current[row][col];
        //   currentTile.classList.add(styles.correct)
        //   console.log("currentTile",currentTile)
        // }
      }
      setAllSelectedLetters(newAllSelectedLetters)
      setSelectedIds(newSelectedIds)
      newCurrentLetters = []
      setHoveredTiles([])
    }
    setCurrentLetters(newCurrentLetters)

    // const updatedGrid = structuredClone(grid);
    // updatedGrid[r][c] = updatedGrid[r][c] === 0 ? 1 : 0;
    // setGrid(updatedGrid);
    // let verify = JSON.stringify(updatedGrid) === JSON.stringify(solution);
    // if (verify) {
    //    setIsCorrect(true);
    //    setTimeout(() => {
    //       alert("CORRECT!")
    //       router.push({
    //          pathname: "/hello",
    //       })
    //    }, 250);
    // }
   }

   function checkIfAdjacent(lastTile, currentTile) {
    const {r: lastRow, c: lastColumn} = lastTile;
    const {r: currentRow, c: currentColumn} = currentTile;
    return currentRow === lastRow - 1 || currentRow === lastRow + 1
      || currentColumn === lastColumn - 1 || currentColumn === lastColumn + 1
   }

   function checkIfInSameDirection(currentTile) {
    const secondLastTile = hoveredTiles.length >= 2 ? hoveredTiles[hoveredTiles.length-2] : currentLetters[0]
    const lastTile = hoveredTiles[hoveredTiles.length-1]
    return (currentTile.r === lastTile.r && currentTile.r === secondLastTile.r) || (currentTile.c === lastTile.c && currentTile.c === secondLastTile.c)
   }

   const hoverLetter = (r,c) => () => {
    if (currentLetters.length === 1) {

      // if (hoveredTiles.length === 1) {
      //   setCurrentDirection((hoveredTiles[0].r === currentLetters[0].r + 1 || hoveredTiles[0].c === currentLetters[0].c + 1) ? 'goingHigher' : 'goingLower')
      // }

      if (!hoveredTiles.length || (!hoveredTiles.length && checkIfAdjacent({r: currentLetters[0].r, c: currentLetters[0].c}, {r,c})) || /* (hoveredTiles.length === 1 && checkIfAdjacent({r: hoveredTiles[0].r, c: hoveredTiles[0].c}, {r, c})) || */ (hoveredTiles.length >= 1 && checkIfInSameDirection({r,c}) && checkIfAdjacent({r, c}, {r: hoveredTiles[hoveredTiles.length - 1].r, c: hoveredTiles[hoveredTiles.length - 1].c}))) {
        setHoveredTiles(allHovered => [...allHovered, {r, c}])
      }
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
                  <div 
                  key={c} 
                  id={`tile-${r}-${c}`}
                  ref={ref => tiles.current[r][c] = ref}
                  className={clsx([
                    styles.cell, 
                    "unselectable",
                    grid[r][c] === 1 && styles.selected, 
                    // isCorrect && grid[r][c] === 1 && styles.correct,
                    // allSelectedLetters.includes(item => item.r === r && item.c === c) && styles.correct,
                    selectedIds.includes(`tile-${r}-${c}`) && styles.correct,
                    isCurrentlyHovered(r,c) && styles.hovered
                  ])} onClick={toggleLetter(r, c)} onMouseOver={hoverLetter(r, c)}>{cell.slice(0, 1)}</div>
               ))}
            </Fragment>
         )
         ))
   }

   return (
      <>
         <div className={styles.grid} /* ref={gridRef} */>
            {renderGrid()}
         </div>
         <Button label={"Reset"} onClick={resetGrid} disabled={!grid.find(row => row.includes(1))} />
      </>
   )
}

export default WordSearch;