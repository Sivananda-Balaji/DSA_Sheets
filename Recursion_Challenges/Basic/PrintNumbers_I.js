//Print numbers from 1 to N

const printNumbers = (N) => {
  if (N === 0) {
    return;
  }
  printNumbers(N - 1);
  console.log(N);
};

printNumbers(5);
