//Sum of First N Numbers

const sumNumbers = (num) => {
  if (num === 0) {
    return 0;
  }
  return num + sumNumbers(num - 1);
};

const result = sumNumbers(4);

console.log(result);
