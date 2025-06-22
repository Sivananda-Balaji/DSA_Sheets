// Sum of Natural Numbers

const SumNatural = (num) => {
  if (num === 1) {
    return num;
  }
  return SumNatural(num - 1) + num;
};

const result = SumNatural(5);

console.log(result);
