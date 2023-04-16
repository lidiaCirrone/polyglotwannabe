// modules
import { useRouter } from 'next/router';

// styles
import styles from './ui.module.css'

export default function Button({ href, label, query }) {
   const router = useRouter();

   const goTo = () => {
      let args = {
         pathname: `${href}`,
      }
      if (query) args.query = query;
      router.push(args)
   }

   return (
      <div className={styles.button} onClick={goTo}>{label}</div>
   )
}