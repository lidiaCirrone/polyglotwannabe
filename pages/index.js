// components
import Layout from '@/components/layout';
import DuolingoWidget from '@/components/duolingoWidget';
import LanguageTiles from '@/components/languageTiles';

// styles
import styles from '@/styles/Home.module.css'

export default function Home() {
   return (
      <Layout pageName={"polyglot wannabe"} pageDescription={"unsolicited facts about languages"}>
         <main className={styles.main}>
            <DuolingoWidget />
            <LanguageTiles />
         </main>
      </Layout>
   )
}
