import { useEffect, useState } from 'react';

// api
import { DUOLINGO_TOKEN } from '@/services/config';

// components
import Link from 'next/link';

// modules
import clsx from 'clsx'

// styles
import styles from './widgets.module.css'

// utils
import { sortCourses } from '@/utils/sorting';
import { duolingoResources } from '@/services/api/duolingoApi';

export default function DuolingoWidget() {

   const [state, setState] = useState({
      userData: {},
      hasResponse: true,
      creationDate: "",
      courses: []
   })

   useEffect(() => {
      (async () => {
         let userData = state.userData;
         let hasResponse = state.hasResponse;
         let creationDate = state.creationDate;
         let courses = state.courses;
         try {
            const res = await fetch(duolingoResources.userData, {
               headers: { Authorization: `Bearer ${DUOLINGO_TOKEN}` }
            })
            userData = await res.json();
            let date = new Date(userData.creationDate * 1000);
            // TO-DO: set global locale
            creationDate = date.toLocaleDateString("en-GB", { month: "long", year: "numeric" });
            courses = sortCourses(userData.courses);
         } catch (error) {
            hasResponse = false;
         }
         setState({
            userData,
            hasResponse,
            creationDate,
            courses
         })
      })()
   }, [])

   if (state.courses.length === 0 || !state.hasResponse) return <p>No data...</p>

   return (
      <section className={clsx([styles["duolingo-widget"], "margin-bottom"])}>
         <div className={clsx([styles.section, "margin-bottom"])}>
            <div className={styles["profile-picture"]}>
               <img src={`${state.userData.picture}/xlarge`} />
            </div>
            <div className={styles.duoBox}>
               <p><Link href={"https://www.duolingo.com/profile/lidiaCirrone"} target={"_blank"}>{state.userData.username}</Link> </p>
               <p>aspiring polyglot since {state.creationDate}</p>
               <p><img className={"margin-right"} src={`/icons/streak.svg`} width={16} /> {state.userData.streak}</p>
               <p><img className={"margin-right"} src={`/icons/crowns.svg`} width={20} />  {state.userData.totalXp}</p>
               <p>
                  currently learning <img className={styles.flag} src={`/flags/${state.userData.learningLanguage}.svg`} width={20} /> from <img className={styles.flag} src={`/flags/${state.userData.courses[0].fromLanguage}.svg`} width={20} />
               </p>
            </div>
         </div>
         <p>also studied:</p>
         <ul>
            {state.courses.map(renderCourses)}
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