// modules
import { useRouter } from "next/router";

//utils
import { languageGames } from "@/utils/globalVariables";

function DragAndDrop({ language }) {

   const router = useRouter();
   const gameData = languageGames[language.slug].data;
   const { sentences, solution } = gameData;

   return (
      <div>
         {language.name} component here
      </div>
   )
}

export default DragAndDrop;