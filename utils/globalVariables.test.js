import { getLanguage } from "./globalVariables";

it('returns a language name given its slug', () => {
   const slug = 'spanish';
   const language = getLanguage(slug);
   expect(language.name).toBe("Español");
})