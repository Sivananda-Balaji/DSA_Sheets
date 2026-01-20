//Factorial Number

const factorialNumber = (num) => {
  if (num <= 1) {
    return 1;
  }
  return num * factorialNumber(num - 1);
};

const result = factorialNumber(6);

console.log(result);
