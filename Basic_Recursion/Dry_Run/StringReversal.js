//String Reversal

const StringReversal = (str) => {
  if (str.length === 0) {
    return "";
  }
  return StringReversal(str.slice(1)) + str[0];
};

const str = "hello";

const result = StringReversal(str);

console.log(result);
