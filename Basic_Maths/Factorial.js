//Factorial of a given number

function factorial(n) {
  let ans = 1;
  while (n > 1) {
    ans *= n;
    n--;
  }
  return ans;
}

const result = factorial(5);

console.log(result);
