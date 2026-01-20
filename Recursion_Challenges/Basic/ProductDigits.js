//Product of Digits

const productDigits = (num) => {
  if (num <= 9) {
    return num;
  }
  return (num % 10) * productDigits(Math.floor(num / 10));
};

const result = productDigits(654);

console.log(result);
