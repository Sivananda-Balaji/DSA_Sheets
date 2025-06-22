//First Call

const increment = (num) => {
  if (num === 5) {
    return 1;
  }
  return 1 + increment(num + 1);
};

const result = increment(1);

console.log(result);
