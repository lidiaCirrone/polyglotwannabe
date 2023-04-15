// components
import Link from 'next/link';

// modules
import clsx from 'clsx'

// styles
import styles from '@/styles/DuolingoWidget.module.css'

// utils
import { sortCourses } from '@/utils/sorting';

export default function DuolingoWidget({ data }) {
   let date = new Date(data.creationDate * 1000);

   // TO-DO: set global locale
   let creationDate = date.toLocaleDateString("en-GB", { month: "long", year: "numeric" });
   let sortedCourses = sortCourses(data.courses);

   return (
      <section className={"margin-bottom"}>
         <div className={clsx([styles.section, "margin-bottom"])}>
            <div>
               <img src={`${data.picture}/xlarge`} className={styles["profile-picture"]} />
            </div>
            <div className={styles.duoBox}>
               <p><Link href={"https://www.duolingo.com/profile/lidiaCirrone"} target={"_blank"}>{data.username}</Link> </p>
               <p>aspiring polyglot since {creationDate}</p>
               <p><img className={"margin-right"} src={`/icons/streak.svg`} width={16} /> {data.streak}</p>
               <p><img className={"margin-right"} src={`/icons/crowns.svg`} width={20} />  {data.totalXp}</p>
               <p>
                  currently learning <img className={styles.flag} src={`/flags/${data.learningLanguage}.svg`} width={20} /> from <img className={styles.flag} src={`/flags/${data.courses[0].fromLanguage}.svg`} width={20} />
               </p>
            </div>
         </div>
         <p>also studied:</p>
         <ul>
            {sortedCourses.map(renderCourses)}
         </ul>
      </section>

   )

   function renderCourses([source, targets], key) {
      return (
         <li key={`${source}-${key}`}>
            <img className={styles.flag} src={`/flags/${source}.svg`} width={20} /> → {targets.map(renderTargetLanguages)}
         </li>
      )
   }

   function renderTargetLanguages(item, key) {
      return (
         <img key={`${item.fromLanguage}-${item.learningLanguage}`} className={styles.flag} src={`/flags/${item.learningLanguage}.svg`} width={20} />
      )
   }
}