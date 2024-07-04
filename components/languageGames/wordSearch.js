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
   const [currentDirection, setCurrentDirection] = useState(null)

   const isCurrentlyHovered = (r,c) => {
    if( !hoveredTiles.length) return false
    return hoveredTiles.find(tile => tile.r === r && tile.c === c)
   }

   const toggleLetter = (r, c) => () => {
    // console.log("\n\n\ntoggleLetter")
    // console.log("selectedTiles", selectedTiles)
    // console.log("r", r)
    // console.log("c", c)
    // console.log("grid[r][c]", grid[r][c])
      let newSelectedTiles = selectedTiles.length === 1 ? [...selectedTiles, {r,c}] : [{r,c}];
      setSelectedTiles(newSelectedTiles);
      // if (selectedTiles.length === 1) {
      //   setHoveredTiles(allHovered => [...allHovered, {r, c}])
      // }
      


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
    return currentRow === lastRow - 1 || currentRow === lastRow + 1
      || currentColumn === lastColumn - 1 || currentColumn === lastColumn + 1
   }

   function checkIfInSameDirection(currentTile) {
    const secondLastTile = hoveredTiles.length >= 2 ? hoveredTiles[hoveredTiles.length-2] : selectedTiles[0]
    const lastTile = hoveredTiles[hoveredTiles.length-1]
    return (currentTile.r === lastTile.r && currentTile.r === secondLastTile.r) || (currentTile.c === lastTile.c && currentTile.c === secondLastTile.c)
   }

   const hoverLetter = (r,c) => () => {
    if (selectedTiles.length >= 1 && selectedTiles.length < 2) {
      console.log("\n\n\nhoverLetter")
      console.log("hoveredTiles", hoveredTiles)
      console.log("r", r)
      console.log("c", c)
      // console.log("grid[r][c]", grid[r][c])
      console.log("no hovered yet", !hoveredTiles.length)
      console.log("no hovered yet and this adjacent to first selected", !hoveredTiles.length && checkIfAdjacent({r: selectedTiles[0].r, c: selectedTiles[0].c}, {r,c}))
      // console.log("2 hovered and this adjacent", hoveredTiles.length === 2 && checkIfAdjacent({r, c}, {r: hoveredTiles[hoveredTiles.length - 1].r, c: hoveredTiles[hoveredTiles.length - 1].c}))
      console.log("more or equal to 1 and same direction and adjacent", hoveredTiles.length >= 1 && checkIfInSameDirection({r,c}) && checkIfAdjacent({r, c}, {r: hoveredTiles[hoveredTiles.length - 1].r, c: hoveredTiles[hoveredTiles.length - 1].c}))

      if (hoveredTiles.length === 1) {
        setCurrentDirection((hoveredTiles[0].r === selectedTiles[0].r + 1 || hoveredTiles[0].c === selectedTiles[0].c + 1) ? 'goingHigher' : 'goingLower')
      }

      if (!hoveredTiles.length || (!hoveredTiles.length && checkIfAdjacent({r: selectedTiles[0].r, c: selectedTiles[0].c}, {r,c})) || /* (hoveredTiles.length === 1 && checkIfAdjacent({r: hoveredTiles[0].r, c: hoveredTiles[0].c}, {r, c})) || */ (hoveredTiles.length >= 1 && checkIfInSameDirection({r,c}) && checkIfAdjacent({r, c}, {r: hoveredTiles[hoveredTiles.length - 1].r, c: hoveredTiles[hoveredTiles.length - 1].c}))) {
        setHoveredTiles(allHovered => [...allHovered, {r, c}])
      }
    }
   }

   useEffect(() => {
    console.log("\n\n\ncurrentDirection", currentDirection)
   }, [currentDirection])

   useEffect(() => {
    console.log("\n\n\nselectedTiles", selectedTiles)
    if (selectedTiles.length === 2) {
      for (let i = 0; i < selectedTiles.length; i++) {
        const tile = selectedTiles[i];
        
      }
    }
   }, [selectedTiles.length])

  //  useEffect(() => {
  //   console.log("\n\n\nhoveredTiles", hoveredTiles)
  //  }, [hoveredTiles.length])

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