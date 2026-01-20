//Reverse Number

const reverseNumber = (num, rev = 0) => {
  if (num === 0) {
    return rev;
  }
  return reverseNumber(Math.floor(num / 10), rev * 10 + (num % 10));
};

const result = reverseNumber(564);

console.log(result);
