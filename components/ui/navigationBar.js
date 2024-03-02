//components
import Link from 'next/link'

// modules
import { useRouter } from 'next/router'

// styles
import styles from './ui.module.css'
import { useDispatch } from 'react-redux';
import { setShowModal } from '@/features/user/userSlice';

export default function NavigationBar() {
   const router = useRouter();
   const dispatch = useDispatch();

   function goBack() {
      dispatch(setShowModal(false));
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