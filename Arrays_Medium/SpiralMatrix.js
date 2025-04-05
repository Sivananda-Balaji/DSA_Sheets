//Print the matrix in spiral manner

function spiralOrder(matrix) {
  const row = matrix[0].length;
  const col = matrix.length;
  let left = 0,
    top = 0,
    right = row - 1,
    bottom = col - 1;
  const ans = [];
  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      ans.push(matrix[left][i]);
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
}

const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

const result = spiralOrder(matrix);

console.log(result);
