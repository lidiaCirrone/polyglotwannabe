//components
import Layout from '@/components/layout'
import NavigationBar from '@/components/ui/navigationBar'

// redux
import { useSelector } from 'react-redux'

// styles
import styles from './language.module.css'

const Language = () => {

   const language = useSelector((state) => state.user.language);
   // TO-DO: now that it's taken from redux, `router.query` may not correspond to language.slug!

   return (
      <Layout pageName={language.name} pageDescription={language.name}>
         <section className={styles.container}>
            <NavigationBar />
            <p>language item from redux: {JSON.stringify(language)}</p>
         </section>
      </Layout>
   )
}

export default Language
