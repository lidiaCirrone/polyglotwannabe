// components
import Link from 'next/link'

// modules
import clsx from 'clsx'

// styles
import styles from './languageTiles.module.css'

// utils
import { languages } from '@/utils/globalVariables'

export default function LanguageTiles() {
   return (
      <section className={styles["tiles-container"]}>
         {languages.map(renderLanguageTile)}
         <div className={clsx([styles.tile, styles["tile-empty"]])}>who's next?</div>
      </section>
   )
}

function renderLanguageTile(language, index) {
   return (
      <Link href={`games/${language.slug}`} key={`language-${index}`}>
         <div className={clsx([styles.tile, styles[`tile${index + 1}`]])}>{language.name}</div>
      </Link>
   )
}