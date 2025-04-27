//Reverse a String I

function reverseString(s) {
  //your code goes here
  const helper = (first, s, last) => {
    if (first === last) {
      return s;
    }
    [s[first], s[last]] = [s[last], s[first]];
    return helper(first + 1, s, last - 1);
  };

  return helper(0, s, s.length - 1);
}

const s = ["h", "e", "l", "l", "o"];

const result = reverseString(s);

console.log(result);
