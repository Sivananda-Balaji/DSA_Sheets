//Binary to Decimal

const binaryToDecimal = (num, end = num.length - 1, power = 0) => {
  if (end === -1) {
    return 0;
  }
  const value = num[end] !== "0" ? Math.pow(2, power) : 0;
  return value + binaryToDecimal(num, end - 1, power + 1);
};

const result = binaryToDecimal("1011");

console.log(result);
