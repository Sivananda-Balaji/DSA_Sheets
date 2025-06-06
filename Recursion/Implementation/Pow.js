//Pow(x,n)

function myPow(x, n) {
  //your code goes here
  let ans = 1;
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  while (n > 0) {
    if (n % 2 === 0) {
      x *= x;
      n = n / 2;
    } else {
      ans *= x;
      n--;
    }
  }
  return ans;
}

const x = 2.0,
  n = 10;

const result = myPow(x, n);

console.log(result);
