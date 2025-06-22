// Is Given String Palindrome

const isPanlindrome = (str) => {
  if (str.length === 1 || str.length === 0) {
    return true;
  }
  if (str[0] !== str.at(-1)) {
    return false;
  }
  return isPanlindrome(str.slice(1, str.length - 1));
};

const str = "racecar";

const result = isPanlindrome(str);

console.log(result);
