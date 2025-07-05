//Divisors of a Number

function divisors(n) {
  let div = 1;
  const res = [];
  while (div <= n) {
    if (n % div === 0) {
      res.push(div);
    }
    div++;
  }
  return res;
}

const n = 6;

const result = divisors(n);

console.log(result);
