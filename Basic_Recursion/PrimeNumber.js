//Check if a Number is Prime or Not

function checkPrime(num) {
  //your code goes here
  const helper = (index, num) => {
    if (num === 1) {
      return false;
    }
    if (index * index >= num) {
      return true;
    }
    if (num % index === 0) {
      return false;
    }
    return helper(index + 1, num);
  };

  return helper(2, num);
}

const result = checkPrime(5);

console.log(result);
