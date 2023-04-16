// modules
import clsx from 'clsx'
import { useRouter } from 'next/router';

// styles
import styles from './languageTiles.module.css'

// utils
import { languages } from '@/utils/globalVariables'

export default function LanguageTiles() {
   const router = useRouter();

   const goTo = (code) => () => {
      router.push({
         pathname: "/hello",
         query: { language: code }
      })
   }

   function renderLanguageTile(language, index) {
      return (
         <div className={clsx([styles.tile, styles[`tile${index + 1}`]])} key={`language-${index}`} onClick={goTo(language.code)}>{language.name}</div>
      )
   }

   return (
      <section className={styles["tiles-container"]}>
         {languages.map(renderLanguageTile)}
         <div className={clsx([styles.tile, styles["tile-empty"]])}>who's next?</div>
      </section>
   )
}