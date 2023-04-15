// components
import Layout from '@/components/layout';
import DuolingoWidget from '@/components/duolingoWidget';
import Button from '@/components/ui/button';
// import LanguageTiles from '@/components/languageTiles';

// styles
import styles from '@/styles/Home.module.css'

export default function Home() {
   return (
      <Layout>
         <main className={styles.main}>
            <DuolingoWidget />
            <Button label={"next"} href={"/hello"} />
            {/* <LanguageTiles /> */}
         </main>
      </Layout>
   )
}
