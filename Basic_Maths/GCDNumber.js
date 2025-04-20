//GCD of Two Numbers

function GCD(n1, n2) {
  const min = Math.min(n1, n2);
  for (let i = min; i >= 1; i--) {
    if (n1 % i === 0 && n2 % i === 0) {
      return i;
    }
  }
}

const result = GCD(4, 6);

console.log(result);
