export function shuffle(array) {
   for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
   }
}

/**
 * generates a matrix of the given number of rows and columns populated with 0s
 * @param {number} rows
 * @param {number} columns 
 * @returns {[[]]}
 */
export function generateWordsGrid(rows, columns) {
   return Array(rows).fill(Array(columns).fill(0));
}