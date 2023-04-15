//components
import Layout from '@/components/layout'
import NavigationBar from '@/components/ui/navigationBar'

// modules
import { useRouter } from 'next/router'

// styles
import styles from './language.module.css'

//utils
import { languages } from '@/utils/globalVariables'

const Language = () => {
   const router = useRouter();
   const { language } = router.query;
   const languageItem = languages.find(item => item.slug === language);

   return (
      <Layout pageName={languageItem.label} pageDescription={languageItem.label}>
         <section className={styles.container}>
            <NavigationBar />
            <p className={"margin-bottom"}>language param inside router.query: {language}</p>
            <p>language item inside array: {JSON.stringify(languageItem)}</p>
         </section>
      </Layout>
   )
}

export default Language
