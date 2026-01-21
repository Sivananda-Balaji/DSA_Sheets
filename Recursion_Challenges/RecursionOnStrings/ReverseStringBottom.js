//Reverse a String Bottom Up Approach

const reverseStringBottom = (str) => {
  if (str.length === 0) {
    return "";
  }
  return reverseStringBottom(str.slice(1)) + str[0];
};

const result = reverseStringBottom("apple");

console.log(result);
