// modules
import { useRouter } from 'next/router';

// styles
import styles from './ui.module.css'
import clsx from 'clsx';

export default function Button({ href, label, query, onClick, disabled = false }) {
   const router = useRouter();

   const goTo = () => {
      let args = {
         pathname: `${href}`,
      }
      if (query) args.query = query;
      router.push(args)
   }

   return (
      <button className={clsx(styles.button, styles.disabled)} onClick={onClick ?? goTo} disabled={disabled}>{label}</button>
   )
}