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

   return (
      <>
         <p>Portuguese game HERE</p>
         {/* <Button label={"Reset"} onClick={resetState} /> */}
      </>
   )
}

export default WordSearch;