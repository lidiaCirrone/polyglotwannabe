// assets
import { Inter } from 'next/font/google'

// components
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

// styles
import styles from '@/styles/Home.module.css'
import utilStyles from '../styles/utils.module.css';

// utils
import { getSortedPostsData } from '@/lib/posts'
import Layout from '@/components/layout'

const inter = Inter({ subsets: ['latin'] })

export async function getStaticProps() {
   const allPostsData = getSortedPostsData();
   return {
      props: {
         allPostsData
      }
   }
}

export default function Home({ allPostsData }) {
   return (
      <Layout>
         <Head>
            <title>polyglot wannabe</title>
            <meta name="description" content="unsolicited facts about languages" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <main>

            <section className={utilStyles.headingMd}>
               <p className={inter.className}>[Your Self Introduction]</p>
               <p className={inter.className}>
                  (This is a sample website - you’ll be building a site like this on{' '}
                  <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
               </p>
            </section>

            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
               <h2 className={inter.className}>Blog</h2>
               <ul className={utilStyles.list}>
                  {allPostsData.map(({ id, date, title }) => (
                     <li className={inter.className} key={id}>
                        {title}
                        <br />
                        {date}
                     </li>
                  ))}
               </ul>
            </section>

            <div className={styles.grid}>
               <Link href="games/italiano" className={styles.card}>
                  <h2 className={inter.className}>
                     Italiano <span>-&gt;</span>
                  </h2>
                  <p className={inter.className}>
                     aka my native tongue
                  </p>
               </Link>
               <Link href="games/english" className={styles.card}>
                  <h2 className={inter.className}>
                     English <span>-&gt;</span>
                  </h2>
                  <p className={inter.className}>
                     the language who <strong>stole</strong> my heart
                  </p>
               </Link>
            </div>
         </main>
      </Layout>
   )
}
