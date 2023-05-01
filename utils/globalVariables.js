import Color from "@/components/languageGames/color"
import DragAndDrop from "@/components/languageGames/dragAndDrop"
import FillTheGaps from "@/components/languageGames/fillTheGaps"
import Memory from "@/components/languageGames/memory/memory"
import WordOrder from "@/components/languageGames/wordOrder"
import WordSearch from "@/components/languageGames/wordSearch"
import Wordle from "@/components/languageGames/wordle/wordle"

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

export function getLanguage(slug) {
   return languages.find(item => item.slug === slug)
}

export function createColorGameSolution({ text, solution }) {
   let splitText = text.split(" ");
   const solutionArray = splitText.map((word, i) => {
      return {
         id: i,
         word,
         type: solution[word] ?? "",
         selected: ""
      }
   })
   return solutionArray;
}

export function createFillTheGapsGameSolution({ text }) {
   return text.split(" ");
}

export const languageGames = {
   "italian": {
      type: "fillTheGaps",
      component: <FillTheGaps language={getLanguage("italian")} />,
      data: {
         instructions: "Fill the gaps by conjugating the verbs inside parentheses in the present tense",
         text: "La lingua ... (essere, 3a p.s.) il sistema o forma storicamente determinata attraverso il quale gli appartenenti a una comunità ... (esprimersi, 3a p.p.) e ... (comunicare, 3a p.p.) tra loro attraverso l'uso di un determinato linguaggio ovvero un insieme di segni scritti (simboli) e/o parlati (suoni).",
         solution: ["è", "si esprimono", "comunicano"],
         credits: <>Taken from <a target="_blank" href="https://it.wikipedia.org/wiki/Lingua_(linguistica)">Wikipedia</a></>
      }
   },
   "english": {
      type: "dragAndDrop",
      component: <DragAndDrop language={getLanguage("english")} />,
      data: {
         instructions: "Drag and drop the sentences in order to create a dialogue that makes sense",
         solution: [
            "Good afternoon, can I see a menu, please?",
            "Certainly, here you are.",
            "Thank you. What's today's special?",
            "Grilled tuna and cheese on rye.",
            "That sounds good. I'll have that.",
            "Would you like something to drink, too?",
            "Yes, I'd like a coke.",
            "Here you are. Enjoy your meal!",
            "Thank you. "
         ],
      }
   },
   "french": {
      type: "wordle",
      component: <Wordle language={getLanguage("french")} />,
      data: {
         key: "value"
      }
   },
   "spanish": {
      type: "memory",
      component: <Memory language={getLanguage("spanish")} />,
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
      component: <WordOrder language={getLanguage("russian")} />,
      data: {
         instructions: "Translate the following sentence by tapping on the words to place them in the right order",
         source: "My name is Lidia, I'm 28 years old and I live in Turin.",
         solution: "Меня зовут Лидия, и мне 28 лет.",
         options: ["Меня", "зовут", "Лидия,", "и", "мне", "28", "лет."]
      }
   },
   "portuguese": {
      type: "wordSearch",
      component: <WordSearch language={getLanguage("portuguese")} />,
      data: {
         instructions: "Find the names of the days of the week by tapping on the letters that belong to them",
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
      type: "color",
      component: <Color language={getLanguage("swedish")} />,
      data: {
         instructions: "Choose the color and tap on the related part of speech. If you want to cancel, just tap again!",
         text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec libero eget arcu scelerisque finibus. Quisque quis cursus nibh, eu egestas neque. Vivamus interdum nibh non lorem placerat fermentum. Donec enim odio, fringilla et tincidunt ut, blandit ornare dui. Nunc hendrerit auctor magna imperdiet commodo. Cras non sapien felis. Duis et porttitor nunc, nec ultrices magna. Nulla tortor nunc, ullamcorper id nunc nec, tincidunt molestie nisl. Aliquam erat volutpat. Sed eget pharetra est. Etiam sit amet odio tortor. Aenean eu semper orci.\n\nNulla ullamcorper bibendum bibendum. Vestibulum ac congue tortor, a dictum nibh. Aliquam gravida lacus mauris, vitae varius lorem ullamcorper in. Phasellus sollicitudin pellentesque neque, ut feugiat risus malesuada ut. Donec varius dolor sit amet auctor ornare. Curabitur a augue nec sapien gravida vulputate nec at mi. In efficitur auctor diam, sit amet tempus eros rhoncus pellentesque. Vivamus blandit imperdiet leo, vel semper enim laoreet vitae. Duis vitae risus id lorem rhoncus mattis vel sed ligula. Nunc lobortis vestibulum nulla id placerat.",
         solution: {
            "Etiam": "adverb",
            "semper": "adverb",
            "libero": "adjective",
            "magna": "adjective",
            "nulla": "adjective",
            "sit": "verb",
            "elit": "verb",
            "placerat": "verb",
            "Vivamus": "verb",
         },
         colors: [
            {
               type: "adverb",
               color: "#fcae7c"
            },
            {
               type: "adjective",
               color: "#f9ffB5"
            },
            {
               type: "verb",
               color: "#b3f5bc"
            },
         ]
      }
   },
}