//Pascal's Triangle I

function pascalTriangleI(r, c) {
  const ans = [];
  for (let i = 1; i <= r; i++) {
    ans.push(new Array(i).fill(1));
  }
  for (let i = 1; i < ans.length - 1; i++) {
    for (let j = 0; j < ans[i].length - 1; j++) {
      const value = ans[i][j] + ans[i][j + 1];
      ans[i + 1][j + 1] = value;
    }
  }
  return ans[r - 1][c - 1];
}

const r = 4,
  c = 2;

const result = pascalTriangleI(r, c);

console.log(result);
