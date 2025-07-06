//Longest Common Prefix

function longestCommonPrefix(str) {
  //your code goes here
  let ans = str[0];
  for (let i = 1; i < str.length; i++) {
    const word = str[i];
    let j;
    for (j = 0; j < word.length; j++) {
      if (ans[j] !== word[j]) {
        ans = ans.slice(0, j);
      }
    }
    ans = ans.slice(0, j);
  }
  return ans;
}

const str = ["abab", "aba", "ab"];

const result = longestCommonPrefix(str);

console.log(result);
