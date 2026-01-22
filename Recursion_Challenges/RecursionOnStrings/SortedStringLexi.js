//check if the string is sorted lexicographically

const isStringSorted = (str, index = 0) => {
  if (str.length - 1 === index) {
    return true;
  }
  if (str[index] > str[index + 1]) {
    return false;
  }
  return isStringSorted(str, index + 1);
};

const result = isStringSorted("abcha");

console.log(result);
