// api
import { DUOLINGO_TOKEN } from '@/services/config';

// components
import Layout from '@/components/layout'
import Link from 'next/link';

// modules
import clsx from 'clsx'

// styles
import styles from '@/styles/Home.module.css'

// utils
import { languages } from '@/utils/globalVariables'
import { sortCourses } from '@/utils/sorting';

export async function getStaticProps() {
   const userDataUrl = 'https://api.duolingo.com/2017-06-30/users/94105502?fields=courses,creationDate,learningLanguage,picture,totalXp,username,streak,trackingProperties';

   const userDataRes = await fetch(userDataUrl, {
      headers: { Authorization: `Bearer ${DUOLINGO_TOKEN}` }
   })
   const duoUserData = await userDataRes.json();

   return {
      props: {
         duoUserData,
      },
   }
}

export default function Home({ duoUserData }) {
   let date = new Date(duoUserData.creationDate * 1000);
   // TO-DO: set global locale
   let creationDate = date.toLocaleDateString("en-GB", { month: "long", year: "numeric" });
   let sortedCourses = sortCourses(duoUserData.courses);

   return (
      <Layout pageName={"polyglot wannabe"} pageDescription={"unsolicited facts about languages"}>
         <main className={styles.main}>
            <section className={"margin-bottom"}>
               <div className={clsx([styles.section, "margin-bottom"])}>
                  <div>
                     <img src={`${duoUserData.picture}/xlarge`} className={styles["profile-picture"]} />
                  </div>
                  <div className={styles.duoBox}>
                     <p><Link href={"https://www.duolingo.com/profile/lidiaCirrone"} target={"_blank"}>{duoUserData.username}</Link> </p>
                     <p>aspiring polyglot since {creationDate}</p>
                     <p><img className={"margin-right"} src={`/icons/streak.svg`} width={16} /> {duoUserData.streak}</p>
                     <p><img className={"margin-right"} src={`/icons/crowns.svg`} width={20} />  {duoUserData.totalXp}</p>
                     <p>
                        currently learning <img className={styles.flag} src={`/flags/${duoUserData.learningLanguage}.svg`} width={20} /> from <img className={styles.flag} src={`/flags/${duoUserData.courses[0].fromLanguage}.svg`} width={20} />
                     </p>
                  </div>
               </div>
               <p>also studied:</p>
               <ul>
                  {sortedCourses.map(renderCourses)}
               </ul>
            </section>
            <section className={styles["tiles-container"]}>
               {languages.map(renderLanguageTile)}
               <div className={clsx([styles.tile, styles["tile-empty"]])}>who's next?</div>
            </section>
         </main>
      </Layout>
   )

   function renderCourses([source, targets], key) {
      return (
         <li key={`${source}-${key}`}>
            <img className={styles.flag} src={`/flags/${source}.svg`} width={20} /> → {targets.map(renderTargetLanguages)}
         </li>
      )
   }

   function renderLanguageTile(language, index) {
      return (
         <Link href={`games/${language.slug}`} key={`language-${index}`}>
            <div className={clsx([styles.tile, styles[`tile${index + 1}`]])}>{language.label}</div>
         </Link>
      )
   }

   function renderTargetLanguages(item, key) {
      return (
         <img key={`${item.fromLanguage}-${item.learningLanguage}`} className={styles.flag} src={`/flags/${item.learningLanguage}.svg`} width={20} />
      )
   }
}
