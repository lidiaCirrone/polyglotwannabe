//components
import Layout from '@/components/layout'
import Link from 'next/link'

// modules
import { useRouter } from 'next/router'

// styles
import styles from './language.module.css'

//utils
import { languages } from '@/utils/globalVariables'
import clsx from 'clsx'

const Language = () => {
   const router = useRouter();
   const { language } = router.query;
   const languageItem = languages.find(item => item.slug === language);

   function goBack() {
      router.back();
   }

   return (
      <Layout pageName={languageItem.label} pageDescription={languageItem.label}>
         <section className={styles.container}>
            <p className={clsx([styles.navigation, "margin-bottom"])}>
               <span className={styles.back} onClick={goBack}>
                  ← go back
               </span>
               &nbsp;|&nbsp;
               <Link href="/" className={styles.home} >
                  Home
               </Link>
            </p>
            <p className={"margin-bottom"}>language param inside router.query: {language}</p>
            <p>language item inside array: {JSON.stringify(languageItem)}</p>
         </section>
      </Layout>
   )
}

export default Language
