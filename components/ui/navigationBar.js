'use client'

//components
import Link from 'next/link'

// modules
import { useRouter } from 'next/navigation'

// store
import { useMainContext } from "@/store/MainProvider";

// styles
import styles from './ui.module.css'

export default function NavigationBar() {
   const router = useRouter();
   const {updateShowModal} = useMainContext()

   function goBack() {
      updateShowModal(false)
      router.back();
   }
   return (
      <p className={styles.navigation}>
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