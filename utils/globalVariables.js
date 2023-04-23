import Memory from "@/components/languageGames/memory/memory"
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
      type: "memory",
      component: <Memory language={"spanish"} />,
      data: {
         instructions: "Flip the tiles and match the pictures with the words they represent",
         cards: [
            { id: 0, label: "cherry", content: "/games/memory/cherry.png", matched: false },
            { id: 1, label: "cherry", content: "la cereza", matched: false },
            { id: 2, label: "croissant", content: "/games/memory/croissant.png", matched: false },
            { id: 3, label: "croissant", content: "el cruasán", matched: false },
            { id: 4, label: "apple", content: "/games/memory/apple.png", matched: false },
            { id: 5, label: "apple", content: "la manzana", matched: false },
            { id: 6, label: "pineapple", content: "/games/memory/pineapple.png", matched: false },
            { id: 7, label: "pineapple", content: "la piña", matched: false },
            { id: 8, label: "cheese", content: "/games/memory/cheese.png", matched: false },
            { id: 9, label: "cheese", content: "el queso", matched: false },
            { id: 10, label: "taco", content: "/games/memory/taco.png", matched: false },
            { id: 11, label: "taco", content: "el taco", matched: false },
            { id: 12, label: "carrot", content: "/games/memory/carrot.png", matched: false },
            { id: 13, label: "carrot", content: "la zanahoria", matched: false },
            { id: 14, label: "orange juice", content: "/games/memory/orange_juice.png", matched: false },
            { id: 15, label: "orange juice", content: "el zumo de naranja", matched: false },
         ],
         credits: <><a target="_blank" href="https://iconos8.es/icon/set/comida/doodle">Iconos de comida</a> by <a target="_blank" href="https://icons8.com">Icons8</a></>
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