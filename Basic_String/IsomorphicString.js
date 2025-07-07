//Isomorphic String

function isomorphicString(s, t) {
  //your code goes here
  const sMap = {},
    tMap = {};
  for (let i = 0; i < s.length; i++) {
    const sLetter = s[i],
      tLetter = t[i];
    if (sMap[tLetter] === undefined && tMap[sLetter] === undefined) {
      sMap[tLetter] = sLetter;
      tMap[sLetter] = tLetter;
    } else if (sMap[tLetter] !== sLetter || tMap[sLetter] !== tLetter) {
      return false;
    }
  }
  return true;
}

const s = "egg",
  t = "add";

const result = isomorphicString(s, t);

console.log(result);
