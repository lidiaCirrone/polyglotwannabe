//components
import Layout from '@/components/layout'
import NavigationBar from '@/components/ui/navigationBar'
import LanguageGame from '@/components/languageGame/languageGame'

// redux
import { useSelector } from 'react-redux'

// styles
import styles from './language.module.css'

const Language = () => {

   const language = useSelector((state) => state.user.language);

   return (
      <Layout pageName={language.name} pageDescription={language.name}>
         <section className={styles.container}>
            <NavigationBar />
            <LanguageGame language={"russian"} />
         </section>
      </Layout>
   )
}

export default Language
