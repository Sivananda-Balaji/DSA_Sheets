//Power of Number

const powerNumber = (base, exp) => {
  if (exp === 0) {
    return 1;
  }
  return base * powerNumber(base, exp - 1);
};

const result = powerNumber(5, 3);

console.log(result);
