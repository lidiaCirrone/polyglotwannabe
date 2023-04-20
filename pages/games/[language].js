//components
import Layout from '@/components/layout'
import NavigationBar from '@/components/ui/navigationBar'

// modules
import { useRouter } from 'next/router'

// redux
import { useSelector } from 'react-redux'

// utils
import { languageGames } from '@/utils/globalVariables';
import Container from '@/components/ui/container'

const Language = () => {

   const router = useRouter();
   const language = useSelector((state) => state.user.language);
   const gameLanguage = router.query.language
   const gameItem = languageGames[gameLanguage];

   return (
      <Layout pageName={language.name} pageDescription={language.name}>
         <Container>
            <NavigationBar />
            <div>
               {gameItem ? (
                  <>
                     <h2>Let's play!</h2>
                     <p className={"margin-bottom"}>{gameItem.data.instructions}</p>

                     {gameItem.component}
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
