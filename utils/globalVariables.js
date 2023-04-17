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
      data: {
         key: "value"
      }
   },
   "english": {
      type: "aaa",
      data: {
         key: "value"
      }
   },
   "french": {
      type: "aaa",
      data: {
         key: "value"
      }
   },
   "spanish": {
      type: "aaa",
      data: {
         key: "value"
      }
   },
   "russian": {
      type: "wordOrder",
      data: {
         instructions: "Translate the following sentence placing the words in the right order:",
         source: "My name is Lidia, I'm 28 years old and I live in Turin.",
         solution: "Меня зовут Лидия, мне 28 лет, и я живу в Турине.",
         options: ["Меня", "зовут", "Лидия,", "и", "мне", "28", "лет."]
      }
   },
   "portuguese": {
      type: "aaa",
      data: {
         key: "value"
      }
   },
   "swedish": {
      type: "aaa",
      data: {
         key: "value"
      }
   },
}