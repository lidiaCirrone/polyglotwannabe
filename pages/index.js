// components
import Layout from '@/components/layout'
import Link from 'next/link';

// modules
import clsx from 'clsx'

// styles
import styles from '@/styles/Home.module.css'

// utils
import { languages } from '@/utils/globalVariables'

export default function Home() {

   function renderLanguageTile(language, index) {
      return (
         <Link href={`games/${language.slug}`} key={`language-${index}`}>
            <div className={clsx([styles.tile, styles[`tile${index + 1}`]])}>{language.label}</div>
         </Link>
      )
   }

   return (
      <Layout pageName={"polyglot wanna be"} pageDescription={"unsolicited facts about languages"}>
         <main>
            <section className={styles["tiles-container"]}>
               {languages.map(renderLanguageTile)}
               <div className={clsx([styles.tile, styles["tile-empty"]])}>who's next?</div>
            </section>
         </main>
      </Layout>
   )
}
