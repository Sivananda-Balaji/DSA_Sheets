// Trailing Zeros of Factorial

const trailingZeros = (num) => {
  if (num === 0) {
    return 0;
  }
  return Math.floor(num / 5) + trailingZeros(Math.floor(num / 5));
};

const result = trailingZeros(50);

console.log(result);
