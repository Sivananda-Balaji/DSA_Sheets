//Remove Consecutive duplicates

const removeConsecutive = (str, index = 0) => {
  if (str.length - 1 === index) {
    return str[index];
  }
  const current = str[index] !== str[index + 1] ? str[index] : "";
  return current + removeConsecutive(str, index + 1);
};

const result = removeConsecutive("aabbccda");

console.log(result);
