//Pascal's Triangle II

function pascalTriangleII(r) {
  let ans = 1;
  const res = [1];
  for (let i = 1; i < r; i++) {
    ans *= r - i;
    ans /= i;
    res.push(ans);
  }
  return res;
}

const r = 4;

const result = pascalTriangleII(r);

console.log(result);
