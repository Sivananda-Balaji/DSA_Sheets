//Factorial of a Given Number

function factorial(n) {
  //your code goes here
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

const result = factorial(5);

console.log(result);
