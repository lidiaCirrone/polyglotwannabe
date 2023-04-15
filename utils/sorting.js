/**
 * 
 * @param {[]} courses an array of objects representing the languages that a Duolingo user has ever studied
 * @returns an array of languages grouped by `fromLanguage` (descending order) and then by `xp` (descending order)
 */
export function sortCourses(courses) {
   let count = courses.reduce((acc, item) => {
      if (acc[item.fromLanguage]) {
         acc[item.fromLanguage]++;
      } else {
         acc[item.fromLanguage] = 1;
      }
      return acc;
   }, {});
   let sortedBySource = Object.entries(count)
      .sort((a, b) => b[1] - a[1])
      .map(v => v[0]);
   let coursesObj = {}
   for (let i = 0; i < sortedBySource.length; i++) {
      let source = sortedBySource[i];
      coursesObj[source] = []
   }
   courses.sort((a, b) => b.xp - a.xp)
   for (let i = 0; i < courses.length; i++) {
      let item = courses[i];
      let source = item.fromLanguage;
      coursesObj[source].push(item);
   }
   let objEntries = Object.entries(coursesObj);
   return objEntries;
}