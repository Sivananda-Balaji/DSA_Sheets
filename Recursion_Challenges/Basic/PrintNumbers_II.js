//Print numbers from `N to 1`

const printNumbers = (N) => {
  if (N === 0) {
    return;
  }
  console.log(N);
  printNumbers(N - 1);
};

printNumbers(5);
