//Palindrome Check

function palindromeCheck(s) {
  //your code goes here
  let left = 0,
    right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

const s = "hannah";

const result = palindromeCheck(s);

console.log(result);
