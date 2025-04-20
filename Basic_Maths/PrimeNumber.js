//Check for Prime Number

function isPrime(n) {
  //your code goes here
  if (n < 2) {
    return false;
  }
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

const result = isPrime(49);

console.log(result);
