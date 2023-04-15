// api
import { DUOLINGO_TOKEN } from '@/services/config';

// components
import Layout from '@/components/layout';
import DuolingoWidget from '@/components/duolingoWidget';
import LanguageTiles from '@/components/languageTiles';

// styles
import styles from '@/styles/Home.module.css'

export async function getStaticProps() {
   const userDataUrl = 'https://api.duolingo.com/2017-06-30/users/94105502?fields=courses,creationDate,learningLanguage,picture,totalXp,username,streak,trackingProperties';

   const userDataRes = await fetch(userDataUrl, {
      headers: { Authorization: `Bearer ${DUOLINGO_TOKEN}` }
   })
   const duoUserData = await userDataRes.json();

   return {
      props: {
         duoUserData,
      },
   }
}

export default function Home({ duoUserData }) {
   return (
      <Layout pageName={"polyglot wannabe"} pageDescription={"unsolicited facts about languages"}>
         <main className={styles.main}>
            <DuolingoWidget data={duoUserData} />
            <LanguageTiles />
         </main>
      </Layout>
   )
}
