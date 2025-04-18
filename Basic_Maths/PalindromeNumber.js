//Palindrome Number

function isPalindrome(n) {
  let reverse = 0,
    copy = n;
  while (copy > 0) {
    const last = copy % 10;
    reverse = reverse * 10 + last;
    copy = Math.floor(copy / 10);
  }
  return n === reverse;
}

const result = isPalindrome(121);

console.log(result);
