//components
import Layout from '@/components/layout'
import NavigationBar from '@/components/ui/navigationBar'
import WordSearch from '@/components/languageGames/wordSearch'

// redux
import { useSelector } from 'react-redux'

// styles
import styles from './language.module.css'

const Portuguese = () => {

   const language = useSelector((state) => state.user.language);

   return (
      <Layout pageName={language.name} pageDescription={language.name}>
         <section className={styles.container}>
            <NavigationBar />
            <WordSearch language={"portuguese"} />
         </section>
      </Layout>
   )
}

export default Portuguese
