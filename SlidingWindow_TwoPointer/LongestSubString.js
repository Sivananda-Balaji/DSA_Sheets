//Longest Substring Without Repeating Characters

function longestNonRepeatingSubstring(s) {
  //your code goes here
  let str = "",
    max = 0,
    curr = 0;
  for (let i = 0; i < s.length; i++) {
    if (!str.includes(s[i])) {
      str += s[i];
      curr++;
    } else {
      while (str.includes(s[i])) {
        str = str.substring(1);
        curr--;
      }
      str += s[i];
      curr++;
    }
    max = Math.max(curr, max);
  }
  return max;
}

const S = "dvdf";

const result = longestNonRepeatingSubstring(S);

console.log(result);
