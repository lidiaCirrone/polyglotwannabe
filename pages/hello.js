// components
import Layout from '@/components/layout';
import NavigationBar from '@/components/ui/navigationBar';
import NewsWidget from '@/components/widgets/newsWidget/newsWidget';

// modules
import { useRouter } from 'next/router';

// styles
import styles from '@/styles/Home.module.css'
import { languages } from '@/utils/globalVariables';

export default function Hello() {
   const router = useRouter();
   // To-DO: get language from global
   const code = router?.query?.language ?? "en";
   const language = languages.find(item => item.code === code)
   console.log(JSON.stringify(router?.query, null, 2));

   return (
      <Layout>
         <main className={styles.main}>
            <NavigationBar />
            <p>You've chosen: {language.name}</p>
            <NewsWidget language={code} />
         </main>
      </Layout>
   )
}
