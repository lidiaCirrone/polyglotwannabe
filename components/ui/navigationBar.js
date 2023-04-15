//components
import Link from 'next/link'

// modules
import { useRouter } from 'next/router'

// styles
import styles from './ui.module.css'

//utils
import clsx from 'clsx'

export default function NavigationBar() {
   const router = useRouter();

   function goBack() {
      router.back();
   }
   return (
      <p className={clsx([styles.navigation, "margin-bottom"])}>
         <span className={styles.back} onClick={goBack}>
            ← go back
         </span>
         &nbsp;|&nbsp;
         <Link href="/" className={styles.home} >
            Home
         </Link>
      </p>
   )
}