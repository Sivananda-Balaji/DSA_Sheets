//LCM of two numbers

function LCM(n1, n2) {
  const n1Tmp = n1,
    n2Tmp = n2;
  while (n2 !== 0) {
    let temp = n2;
    n2 = n1 % n2;
    n1 = temp;
  }
  return (n1Tmp * n2Tmp) / n1;
}

const n1 = 4,
  n2 = 6;

const result = LCM(n1, n2);

console.log(result);
