//Reverse a String Top Down Approach

const reverseStringTop = (str, end = str.length - 1, rev = "") => {
  if (end < 0) {
    return rev;
  }
  rev += str[end];
  return reverseStringTop(str, end - 1, rev);
};

const result = reverseStringTop("apple");

console.log(result);
