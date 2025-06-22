// Decimal to Binary Conversion

const DecimalToBinary = (num) => {
  if (num < 2) {
    return num;
  }

  return DecimalToBinary(Math.floor(num / 2)) + String(num % 2);
};

const result = DecimalToBinary(10);

console.log(result);
