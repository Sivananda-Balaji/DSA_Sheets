//count Vowels Bottoms Up

const countVowelsBottom = (str, i = 0) => {
  if (i === str.length) {
    return 0;
  }
  const current = new Set(["a", "e", "i", "o", "u"]).has(str[i]) ? 1 : 0;
  return current + countVowelsBottom(str, i + 1);
};

const result = countVowelsBottom("apple");

console.log(result);
