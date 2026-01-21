//Replace Character

const replaceCharacter = (str, character, replace, index = 0) => {
  if (index === str.length) {
    return "";
  }
  const curr = str[index] === character ? replace : str[index];
  return curr + replaceCharacter(str, character, replace, index + 1);
};

const result = replaceCharacter("apple", "p", "b");

console.log(result);
