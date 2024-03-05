//components
import Container from '@/components/ui/container'
import Credits from '@/components/ui/credits';
import Layout from '@/components/layout'
import NavigationBar from '@/components/ui/navigationBar'

// modules
import { useRouter } from 'next/router'

// utils
import { languageGames } from '@/utils/globalVariables';

const Language = () => {

   const router = useRouter();
   const gameLanguage = router.query.language

   if (!gameLanguage) return <p>No data...</p>

   const capitalizedLanguageName = gameLanguage.charAt(0).toUpperCase() + gameLanguage.slice(1)
   const gameItem = languageGames[gameLanguage];

   return (
      <Layout pageName={capitalizedLanguageName} pageDescription={capitalizedLanguageName}>
         <Container>
            <NavigationBar />
            <div>
               {gameItem ? (
                  <>
                     <h2>Let's play!</h2>
                     <p className={"mb-2"}>{gameItem.data.instructions}</p>

                     {gameItem.component}
                     {gameItem.data.credits && <Credits>{gameItem.data.credits}</Credits>}
                  </>
               ) : <>
                  <h2>{":("}</h2>
                  <p>Unfortunately there's no game for the <span className={"bold"}>{gameLanguage}</span> language</p>
               </>
               }
            </div>
         </Container>
      </Layout>
   )
}

export default Language
