//Print Numbers

const printNumFn = (start, num) => {
  if (start > num) {
    return;
  }
  console.log(start);
  return printNumFn(start + 1, num);
};

const printNumbers = (num) => {
  printNumFn(1, num);
};

printNumbers(5);
