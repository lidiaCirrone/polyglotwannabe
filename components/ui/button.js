'use client'

// modules
import { useRouter, useSearchParams } from 'next/navigation';

// styles
import styles from './ui.module.css'
import clsx from 'clsx';

export default function Button({ href, label, query, onClick, disabled = false }) {
   const router = useRouter();
   const searchParams = useSearchParams()

   const goTo = () => {
      console.log("new URLSearchParams(searchParams.toString())", new URLSearchParams(searchParams.toString()))
      if (searchParams) args.query = query;
      router.push(`${href}`)
   }

   return (
      <button className={clsx(styles.button, styles.disabled)} onClick={onClick ?? goTo} disabled={disabled}>{label}</button>
   )
}