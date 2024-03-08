import { wordleLetters } from '@/utils/playing';
import React, { useEffect, useState } from 'react'

// styles
import styles from './wordle.module.css'
import SvgIcon from '@/components/ui/svgIcon';

function Keypad({ usedKeys, handleKeyup }) {
   const [letters, setLetters] = useState(null);

   useEffect(() => {
      setLetters(wordleLetters)
   }, [])

   const onKeyPress = (key) => () => {
      handleKeyup({ key });
   }

   const renderLetters = (letter) => {
      const color = usedKeys[letter.key];
      return (
         <div key={`letter-${letter.key}`} className={styles[color]} onClick={onKeyPress(letter.key)}>{letter.key}</div>
      )
   }

   return (
      <div>
         <div className={styles['keypad']}>
            <div className={styles["key"]} onClick={onKeyPress("Backspace")}><SvgIcon name="backspace" /></div>
            {letters && letters.map(renderLetters)}
            <div className={styles["key"]} onClick={onKeyPress("Enter")}><SvgIcon name="enter" /></div>
         </div>
      </div>
   )
}

export default Keypad;