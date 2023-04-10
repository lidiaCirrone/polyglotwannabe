import Head from "next/head";
import styles from "./layout.module.css"

export default function Layout({ pageName, pageDescription, children }) {
   return (
      <>
         <Head>
            <title>{pageName}</title>
            <meta name="description" content={pageDescription} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <div className={styles.container}>{children}</div>
      </>
   )
}