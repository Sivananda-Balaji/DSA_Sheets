// 54. Spiral Matrix

var spiralOrder = function (matrix) {
  const ans = [];
  let top = 0,
    left = 0,
    right = matrix[0].length - 1,
    bottom = matrix.length - 1;
  while (left <= right && top <= bottom) {
    for (let i = top; i <= right; i++) {
      ans.push(matrix[top][i]);
    }
    top++;
    for (let i = top; i <= bottom; i++) {
      ans.push(matrix[i][right]);
    }
    right--;
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        ans.push(matrix[bottom][i]);
      }
      bottom--;
    }
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        ans.push(matrix[i][left]);
      }
      left++;
    }
  }
  return ans;
};

const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

const result = spiralOrder(matrix);

console.log(result);
