//Sort Characters by Frequency

function frequencySort(s) {
  //your code goes here
  const map = {};
  for (let i = 0; i < s.length; i++) {
    map[s[i]] !== undefined ? map[s[i]]++ : (map[s[i]] = 1);
  }
  return Object.entries(map)
    .sort((a, b) => (b[1] === a[1] ? a[0].localeCompare(b[0]) : b[1] - a[1]))
    .map(([char]) => char);
}

const s = "tree";

const result = frequencySort(s);

console.log(result);
