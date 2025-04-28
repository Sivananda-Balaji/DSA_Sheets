//Sum of Digits in a Given Number

function addDigits(num) {
  //your code goes here
  const helper = (sum, num) => {
    if (num === 0) {
      if (sum > 9) {
        num = sum;
        sum = 0;
      } else {
        return sum;
      }
    }
    const val = num % 10;
    sum += val;
    num = Math.floor(num / 10);
    return helper(sum, num);
  };
  return helper(0, num);
}
const result = addDigits(529);

console.log(result);
