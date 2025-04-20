//Count of Prime Numbers till N

function primeUptoN(n) {
  let count = 0;
  const isPrime = (num) => {
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      count++;
    }
  }
  return count;
}

const result = primeUptoN(10);

console.log(result);
