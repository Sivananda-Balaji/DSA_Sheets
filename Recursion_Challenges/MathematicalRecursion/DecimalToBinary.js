//Decimal to Binary

const decimalToBinary = (num) => {
  if (num === 0) {
    return "";
  }
  return decimalToBinary(Math.floor(num / 2)) + (num % 2);
};

const result = decimalToBinary(13);

console.log(result);
