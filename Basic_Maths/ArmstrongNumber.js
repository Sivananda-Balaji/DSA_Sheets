//Check if the Number is Armstrong

function isArmstrong(n) {
  const len = String(n).length;
  let copy = n;
  let ans = 0;
  while (copy > 0) {
    const last = copy % 10;
    const val = Math.pow(last, len);
    ans += val;
    copy = Math.floor(copy / 10);
  }
  return n === ans;
}

const result = isArmstrong(153);

console.log(result);
