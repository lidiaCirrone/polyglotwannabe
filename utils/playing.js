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
   // return Array(rows).fill(Array(columns).fill(0));
   return Array(rows).fill().map(_ => Array(columns).fill(0))
}

/**
 * generates a matrix of the same length of the given one, populating it with 1s where cells contain the solution `indicator` and 0s where they don't
 * @param {number} matrix the source matrix to calculate the 0/1 pairs from
 * @param {string} indicator the character used to indicate if the given cell is part of the solution
 * @returns {[[]]}
 */
export function generateSolutionFromMatrix(matrix, indicator) {
   return matrix.map((row, r) => row.map((col, c) => matrix[r][c].includes(indicator) ? 1 : 0));
}

export const wordleLetters = [
   { key: "a" },
   { key: "b" },
   { key: "c" },
   { key: "d" },
   { key: "e" },
   { key: "f" },
   { key: "g" },
   { key: "h" },
   { key: "i" },
   { key: "j" },
   { key: "k" },
   { key: "l" },
   { key: "m" },
   { key: "n" },
   { key: "o" },
   { key: "p" },
   { key: "q" },
   { key: "r" },
   { key: "s" },
   { key: "t" },
   { key: "u" },
   { key: "v" },
   { key: "w" },
   { key: "x" },
   { key: "y" },
   { key: "z" },
]