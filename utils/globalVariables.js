import WordOrder from "@/components/languageGames/wordOrder"
import WordSearch from "@/components/languageGames/wordSearch"

/**
 * `code` the 2-letter ISO-639-1 code for that language
 * `label` the name in the language
 * `name` the English name
 * `slug`
 */
export const languages = [
   {
      code: "it",
      name: "Italiano",
      label: "Italian",
      locale: "it-IT",
      slug: "italian",
   },
   {
      code: "en",
      name: "English",
      label: "English",
      locale: "en-GB",
      slug: "english",
   },
   {
      code: "fr",
      name: "Français",
      label: "French",
      locale: "fr-FR",
      slug: "french",
   },
   {
      code: "es",
      name: "Español",
      label: "Spanish",
      locale: "es-ES",
      slug: "spanish",
   },
   {
      code: "ru",
      name: "Русский",
      label: "Russian",
      locale: "ru-RU",
      slug: "russian",
   },
   {
      code: "pt",
      name: "Português",
      label: "Portuguese",
      locale: "pt-PT",
      slug: "portuguese",
   },
   {
      code: "sv",
      name: "Svenska",
      label: "Swedish",
      locale: "sv-SE",
      slug: "swedish",
   },
]

export const languageGames = {
   "italian": {
      type: "aaa",
      component: <p>Italian component here</p>,
      data: {
         key: "value"
      }
   },
   "english": {
      type: "aaa",
      component: <p>English component here</p>,
      data: {
         key: "value"
      }
   },
   "french": {
      type: "aaa",
      component: <p>French component here</p>,
      data: {
         key: "value"
      }
   },
   "spanish": {
      type: "aaa",
      component: <p>Spanish component here</p>,
      data: {
         key: "value"
      }
   },
   "russian": {
      type: "wordOrder",
      component: <WordOrder language={"russian"} />,
      data: {
         instructions: "Translate the following sentence placing the words in the right order:",
         source: "My name is Lidia, I'm 28 years old and I live in Turin.",
         solution: "Меня зовут Лидия, и мне 28 лет.",
         options: ["Меня", "зовут", "Лидия,", "и", "мне", "28", "лет."]
      }
   },
   "portuguese": {
      type: "wordSearch",
      component: <WordSearch language={"portuguese"} />,
      data: {
         instructions: "Find the names of the days of the week:",
         matrix: [
            ["R", "O", "U", "E", "A", "A", "T-", "F", "U", "L", "U", "T", "R"],
            ["S", "U", "S", "A", "B", "S-", "E-", "X-", "T-", "A-", "S", "E", "G"],
            ["A", "D", "O", "M", "I", "S", "R-", "J", "F", "E", "U", "M", "N"],
            ["D", "O", "U", "L", "T", "T", "Ç-", "A", "O", "L", "E", "A", "T"],
            ["S-", "E-", "G-", "U-", "N-", "D-", "A-", "Q", "G", "Q", "U", "I", "N"],
            ["S-", "A-", "B-", "A-", "D-", "O-", "N", "U", "E", "T", "X", "T", "A"],
            ["E", "R", "L", "E", "Q", "M-", "U", "I", "Q-", "G", "S", "A", "B"],
            ["G", "F", "M", "I", "U", "I-", "I", "Q-", "U-", "A-", "R-", "T-", "A-",],
            ["H", "G", "M", "I", "E", "N-", "T", "N", "I-", "I", "T", "E", "R"],
            ["I", "J", "R", "Ç", "A", "G-", "O", "R", "N-", "J", "S", "S", "A"],
            ["D", "M", "Ç", "A", "G", "O-", "R", "N", "T-", "O", "A", "R", "O"],
            ["A", "N", "A", "Q", "N", "D", "F", "T", "A-", "E", "B", "T", "A"]
         ],
         indicator: "-",
         credits: `Taken from "Ana Tavares , Português XXI 1 - Caderno de Exercícios (Grupo LIDEL)"`
      }
   },
   "swedish": {
      type: "aaa",
      component: <p>Swedish component here</p>,
      data: {
         key: "value"
      }
   },
}