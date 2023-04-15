// components
import Layout from '@/components/layout';

// modules
import { useRouter } from 'next/router';

// styles
import styles from '@/styles/Home.module.css'

export default function Hello() {
   const router = useRouter();
   // To-DO: get language from global
   const language = router?.query?.language ?? "en";
   console.log(JSON.stringify(router.query, null, 2));

   return (
      <Layout>
         <main className={styles.main}>
            set language: {language}
         </main>
      </Layout>
   )
}
