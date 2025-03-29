//73. Set Matrix Zeroes

var setZeroes = function (matrix) {
  const markRows = (row) => {
    for (let k = 0; k < matrix[row].length; k++) {
      if (matrix[row][k] !== 0) {
        matrix[row][k] = "t";
      }
    }
  };
  const markColumns = (column) => {
    for (let k = 0; k < matrix.length; k++) {
      if (matrix[k][column] !== 0) {
        matrix[k][column] = "t";
      }
    }
  };

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        markRows(i);
        markColumns(j);
      }
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === "t") {
        matrix[i][j] = 0;
      }
    }
  }
  return matrix;
};

const matrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];

setZeroes(matrix);

console.log(matrix);
