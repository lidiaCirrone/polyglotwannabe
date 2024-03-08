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
   const gameTitle = gameItem?.data?.title ?? "Let's play!";

   return (
      <Layout pageName={capitalizedLanguageName} pageDescription={capitalizedLanguageName}>
         <Container>
            <NavigationBar />
            <div>
               {gameItem ? (
                  <>
                     <div className={"instructions"}>
                        <div>
                           <h2 className={"margin-bottom"}>{gameTitle}</h2>
                           <p>{gameItem.data.instructions}</p>
                        </div>
                     </div>

                     <div className={"game"}>
                        <div>
                           {gameItem.component}
                           {gameItem.data.credits && <Credits>{gameItem.data.credits}</Credits>}
                        </div>
                     </div>

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
