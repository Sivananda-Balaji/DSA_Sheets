//Fibonacci Number

function fib(n) {
  //your code goes here
  const helper = (n) => {
    if (n <= 1) {
      return n;
    }
    return helper(n - 1) + helper(n - 2);
  };
  return helper(n);
}

const result = fib(6);

console.log(result);
