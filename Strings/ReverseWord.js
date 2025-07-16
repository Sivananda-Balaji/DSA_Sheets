//Reverse every word in a string

function reverseWords(s) {
  let ans = "",
    temp = "";
  for (let i = 0; i < s.length; i++) {
    const letter = s[i];
    if (letter !== " ") {
      temp += letter;
    } else if (letter === " " && temp.at(-1) !== " " && temp !== "") {
      ans = temp + letter + ans;
      temp = "";
    }
  }
  ans = temp + " " + ans;
  return ans.trim();
}

const s = "gmo   cpqa   zfu   ldqu  t";

const result = reverseWords(s);

console.log(result);
