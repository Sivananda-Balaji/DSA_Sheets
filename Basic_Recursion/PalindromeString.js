//Check if String is Palindrome or Not

function palindromeCheck(s) {
  //your code goes here
  const helper = (first, s, last) => {
    if (first >= last) {
      return true;
    }
    if (s[first] !== s[last]) {
      return false;
    }
    return helper(first + 1, s, last - 1);
  };
  return helper(0, s, s.length - 1);
}

const s = "hannah";

const result = palindromeCheck(s);

console.log(result);
