import { wordleLetters } from '@/utils/playing';
import React, { useEffect, useState } from 'react'

// styles
import styles from './wordle.module.css'

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
      <div className={styles['keypad']}>
         {letters && letters.map(renderLetters)}
         <div className={styles["key"]} onClick={onKeyPress("Enter")}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" id="enter-key" className={"width-half"}><path d="M70.5 5h-31A4.505 4.505 0 0 0 35 9.5V35H9.5A4.505 4.505 0 0 0 5 39.5v31C5 72.981 7.019 75 9.5 75h59.333c3.4 0 6.167-2.766 6.167-6.167V9.5C75 7.019 72.981 5 70.5 5zm.5 63.833A2.169 2.169 0 0 1 68.833 71H9.5a.5.5 0 0 1-.5-.5v-31a.5.5 0 0 1 .5-.5H37a2 2 0 0 0 2-2V9.5a.5.5 0 0 1 .5-.5h31a.5.5 0 0 1 .5.5v59.333z"></path><path d="M55 24a2 2 0 0 0-2 2v27.5H27.1l3.409-3.408a2 2 0 1 0-2.828-2.828l-6.821 6.82a2.015 2.015 0 0 0-.25.307c-.034.049-.056.102-.084.153-.035.063-.073.124-.1.191-.028.066-.043.134-.063.202-.017.057-.04.112-.051.171a2.005 2.005 0 0 0 0 .784c.012.059.034.114.05.17.02.069.036.137.063.203.028.067.066.128.101.191.028.051.05.104.083.153.074.11.157.213.25.306l6.822 6.821c.39.391.902.586 1.414.586s1.023-.195 1.414-.586a2 2 0 0 0 0-2.828L27.1 57.5H55a2 2 0 0 0 2-2V26a2 2 0 0 0-2-2z"></path></svg></div>
         <div className={styles["key"]} onClick={onKeyPress("Backspace")}><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20"><path d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"></path></svg></div>
      </div>
   )
}

export default Keypad;