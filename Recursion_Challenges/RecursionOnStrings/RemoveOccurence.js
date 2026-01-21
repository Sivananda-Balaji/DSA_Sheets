//Remove Occurence

const removeOccurence = (str, character, index = 0) => {
  if (str.length === index) {
    return "";
  }
  const curr = str[index] === character ? "" : str[index];
  return curr + removeOccurence(str, character, index + 1);
};

const result = removeOccurence("apple", "p");

console.log(result);
