//Check for Prime Number

function isPrime(n) {
  //your code goes here
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

const result = isPrime(5);

console.log(result);
