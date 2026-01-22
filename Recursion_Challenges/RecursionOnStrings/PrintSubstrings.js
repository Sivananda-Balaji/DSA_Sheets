//print all substrings

const printSubstrings = (str, index = 0, current = "") => {
  if (str.length === index) {
    console.log(current);
    return;
  }
  printSubstrings(str, index + 1, current + str[index]);
  printSubstrings(str, index + 1, current);
};

printSubstrings("abc");
