//Check if a Number is Prime or Not

class Solution {
  helperPrime(num, index) {
    if (index * index > num) {
      return true;
    }
    if (num % index === 0) {
      return false;
    }
    return this.helperPrime(num, index + 1);
  }
  checkPrime(num) {
    if (num < 2) {
      return false;
    }
    return this.helperPrime(num, 2);
  }
}

const result = new Solution();

console.log(result.checkPrime(5));
