//Largest Odd Number in a String

function largeOddNum(s) {
  //your code goes here
  while (s[0] === "0") {
    s = s.slice(1);
  }
  while (s.at(-1) % 2 === 0) {
    s = s.slice(0, -1);
  }
  return s;
}

const s = "5347";

const result = largeOddNum(s);

console.log(result);
