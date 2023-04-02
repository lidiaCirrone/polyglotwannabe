// assets
import { Inter } from 'next/font/google'

// components
import Head from 'next/head';
import Link from "next/link";

// styles
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function English() {
   return (
      <>
         <Head>
            <title>English</title>
            <meta name="description" content="English" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <main className={styles.main}>

            <div className={styles.grid}>
               <Link href="/" className={styles.card}>

                  <h2 className={inter.className}>
                     <span>&lt;-</span> Home
                  </h2>
                  <p className={inter.className}>
                     Back to home
                  </p>
               </Link>
            </div>
         </main>
      </>
   )
}