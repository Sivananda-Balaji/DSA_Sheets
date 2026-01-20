//Sum of Digits

const sumDigits = (num) => {
  if (num <= 9) {
    return num;
  }
  return (num % 10) + sumDigits(Math.floor(num / 10));
};

const result = sumDigits(654);

console.log(result);
