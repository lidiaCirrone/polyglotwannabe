import { wordleLetters } from '@/utils/playing';
import React, { useEffect, useState } from 'react'

// styles
import styles from './wordle.module.css'

function Keypad({ usedKeys }) {
   const [letters, setLetters] = useState(null);

   useEffect(() => {
      setLetters(wordleLetters)
   }, [])

   const renderLetters = (letter) => {
      const color = usedKeys[letter.key];
      return (
         <div key={`letter-${letter.key}`} className={styles[color]}>{letter.key}</div>
      )
   }

   return (
      <div className={styles['keypad']}>
         {letters && letters.map(renderLetters)}
      </div>
   )
}

export default Keypad;