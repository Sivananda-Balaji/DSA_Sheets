//print all subsequence

const printSubsequence = (str, index = 0, current = "") => {
  if (str.length === index) {
    console.log(current);
    return;
  }
  printSubsequence(str, index + 1, current + str[index]);
  printSubsequence(str, index + 1, current);
};

printSubsequence("abc");
