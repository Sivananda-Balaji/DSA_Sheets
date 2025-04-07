//Pascal's Triangle III

function pascalTriangleIII(n) {
  const ans = [];
  for (let i = 1; i <= n; i++) {
    ans.push(new Array(i).fill(1));
  }
  for (let i = 1; i < ans.length - 1; i++) {
    for (let j = 0; j < ans[i].length - 1; j++) {
      ans[i + 1][j + 1] = ans[i][j] + ans[i][j + 1];
    }
  }
  return ans;
}

const n = 4;

const result = pascalTriangleIII(n);

console.log(result);
