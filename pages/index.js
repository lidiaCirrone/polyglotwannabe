// styles
import styles from '@/styles/Home.module.css'

// utils
import Layout from '@/components/layout'
import clsx from 'clsx'

export default function Home() {
   return (
      <Layout pageName={"polyglot wanna be"} pageDescription={"unsolicited facts about languages"}>
         <main>
            <section className={styles["tiles-container"]}>
               <div className={clsx([styles.tile, styles["tile-one"]])}>Italiano</div>
               <div className={clsx([styles.tile, styles["tile-two"]])}>English</div>
               <div className={clsx([styles.tile, styles["tile-three"]])}>French</div>
               <div className={clsx([styles.tile, styles["tile-four"]])}>Español</div>
               <div className={clsx([styles.tile, styles["tile-five"]])}>Русский</div>
               <div className={clsx([styles.tile, styles["tile-six"]])}>Português</div>
               <div className={clsx([styles.tile, styles["tile-seven"]])}>Svenska</div>
               <div className={clsx([styles.tile, styles["tile-eight"]])}>who's next?</div>
            </section>
         </main>
      </Layout>
   )
}
