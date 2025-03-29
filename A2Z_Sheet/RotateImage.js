// 48. Rotate Image

var rotate = function (matrix) {
  const ans = Array.from({ length: matrix.length }, () =>
    Array(matrix[0].length).fill(0)
  );
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      ans[j][matrix.length - 1 - i] = matrix[i][j];
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      matrix[i][j] = ans[i][j];
    }
  }
};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

rotate(matrix);

console.log(matrix);
