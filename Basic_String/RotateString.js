//Rotate String

function rotateString(s, goal) {
  //your code goes here
  if (s.length !== goal.length) {
    return false;
  }
  const val = s + s;
  return val.includes(goal);
}

const s = "abcde",
  goal = "adeac";

const result = rotateString(s, goal);

console.log(result);
