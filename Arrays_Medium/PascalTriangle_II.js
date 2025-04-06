//Pascal's Triangle II

function pascalTriangleII(r) {
  let ans = [];
  for (let i = 1; i <= r; i++) {
    ans.push(new Array(i).fill(1));
  }
  for (let i = 1; i < ans.length - 1; i++) {
    for (let j = 0; j < ans[i].length - 1; j++) {
      const val = ans[i][j] + ans[i][j + 1];
      ans[i + 1][j + 1] = val;
    }
  }
  return ans[r - 1];
}

const r = 4;

const result = pascalTriangleII(r);

console.log(result);
