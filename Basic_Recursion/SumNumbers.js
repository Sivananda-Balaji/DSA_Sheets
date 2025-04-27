//Sum of First N Numbers

function NnumbersSum(N) {
  //your code goes here
  if (N === 1) {
    return 1;
  }
  return N + NnumbersSum(N - 1);
}

const result = NnumbersSum(4);

console.log(result);
