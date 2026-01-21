//count vowels on a string Top Down

const countVowels = (
  str,
  index = 0,
  count = 0,
  vowels = new Set(["a", "e", "i", "o", "u"]),
) => {
  if (index === str.length) {
    return count;
  }
  if (vowels.has(str[index])) {
    count++;
  }
  return countVowels(str, index + 1, count, vowels);
};

const result = countVowels("apple");

console.log(result);
