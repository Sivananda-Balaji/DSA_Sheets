//Valid Anagram

function anagramStrings(s, t) {
  //your code goes here
  if (s.length !== t.length) {
    return false;
  }
  const map = {};
  for (let i = 0; i < s.length; i++) {
    map[s[i]] !== undefined ? map[s[i]]++ : (map[s[i]] = 1);
  }
  for (let i = 0; i < t.length; i++) {
    if (map[t[i]] === undefined) {
      return false;
    } else if (map[t[i]] > 1) {
      map[t[i]]--;
    } else {
      delete map[t[i]];
    }
  }
  return true;
}

const s = "anagram",
  t = "nagaram";

const result = anagramStrings(s, t);

console.log(result);
