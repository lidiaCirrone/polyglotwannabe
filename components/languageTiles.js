'use client'

// modules
import clsx from 'clsx'

// store
import { useMainContext } from '@/store/MainProvider';

// styles
import styles from './languageTiles.module.css'

// utils
import { languages } from '@/utils/globalVariables'
import { useRouter } from 'next/navigation';

export default function LanguageTiles() {
  const router = useRouter()
  const {updateLanguage} = useMainContext()

   const goTo = (newLanguage) => () => {
    console.log("\n\n goTo", newLanguage)
    updateLanguage(newLanguage.slug);
      router.push( `/games/${newLanguage.slug}`)
   }

   function renderLanguageTile(language, index) {
      return (
         <div className={clsx([styles.tile, styles[`tile${index + 1}`]])} key={`language-${index}`} onClick={goTo(language)}>{language.name}</div>
      )
   }

   return (
      <section className={styles["tiles-container"]}>
         {languages.map(renderLanguageTile)}
         <div className={clsx([styles.tile, styles["tile-empty"]])}>who's next?</div>
      </section>
   )
}