//GCD of Numbers

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const result = gcd(18, 12);

console.log(result);
