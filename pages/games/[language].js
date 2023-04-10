//components
import Link from 'next/link'

// modules
import { useRouter } from 'next/router'

// styles
import styles from './language.module.css'

const Language = () => {
   const router = useRouter()
   const { language } = router.query

   function goBack() {
      router.back();
   }

   return (
      <section className={styles.container}>
         <p className={styles.navigation}>
            <span className={styles.back} onClick={goBack}>
               ← go back
            </span>
            &nbsp;|&nbsp;
            <Link href="/" className={styles.home} >
               Home
            </Link>
         </p>
         <p>language param inside router.query: {language}</p>
      </section>
   )
}

export default Language
