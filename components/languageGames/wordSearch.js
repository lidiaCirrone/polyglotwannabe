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
      <div>
         <h2>Let's play!</h2>
         <p className={"margin-bottom"}>{gameItem.data.instructions}</p>
         {/* <Button label={"Reset"} onClick={resetState} /> */}
      </div>
   )
}

export default WordSearch;