//components
import Layout from '@/components/layout'
import NavigationBar from '@/components/ui/navigationBar'
import WordOrder from '@/components/languageGames/wordOrder'

// redux
import { useSelector } from 'react-redux'

// styles
import styles from './language.module.css'

const Russian = () => {

   const language = useSelector((state) => state.user.language);

   return (
      <Layout pageName={language.name} pageDescription={language.name}>
         <section className={styles.container}>
            <NavigationBar />
            <WordOrder language={"russian"} />
         </section>
      </Layout>
   )
}

export default Russian
