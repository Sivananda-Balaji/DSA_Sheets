//sum of numbers

const sumNumbers = (num) => {
  if (num === 1) {
    return num;
  }
  return num + sumNumbers(num - 1);
};

const result = sumNumbers(5);

console.log(result);
