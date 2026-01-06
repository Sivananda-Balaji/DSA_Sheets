//Palindrome Check

const palindromeCheck = (start, end, str) => {
  if (start >= end) {
    return true;
  }
  if (str[start] !== str[end]) {
    return false;
  }
  return palindromeCheck(start + 1, end - 1, str);
};
const palindrome = (str) => {
  const start = 0,
    end = str.length - 1;

  return palindromeCheck(start, end, str);
};

const result = palindrome("madam");

console.log(result);
