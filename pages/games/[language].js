//components
import Layout from '@/components/layout'
import NavigationBar from '@/components/ui/navigationBar'

// redux
import { useSelector } from 'react-redux'

// styles
import styles from './language.module.css'
import LanguageGame from '@/components/languageGames/wordOrder'
import { useRouter } from 'next/router'

const Language = () => {

   const router = useRouter();
   const language = useSelector((state) => state.user.language);
   // TO-DO: now that it's taken from redux, `router.query` may not correspond to language.slug!
   console.log("redux language item: ", JSON.stringify(language, null, 2));

   // TO-DO: check with ifReady to see it router has laready hydrated, otherwise router.query.language will be undefined!
   console.log("router?.query?.language: ", router?.query?.language);

   return (
      <Layout pageName={language.name} pageDescription={language.name}>
         <section className={styles.container}>
            <NavigationBar />
            <LanguageGame language={router?.query?.language} />
         </section>
      </Layout>
   )
}

export default Language
