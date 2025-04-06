//Pascal's Triangle I

function pascalTriangleI(r, c) {
  r = r - 1;
  c = c - 1;
  let ans = 1;
  for (let i = 0; i < c; i++) {
    ans *= r - i;
    ans /= i + 1;
  }
  return ans;
}

const r = 4,
  c = 2;

const result = pascalTriangleI(r, c);

console.log(result);
