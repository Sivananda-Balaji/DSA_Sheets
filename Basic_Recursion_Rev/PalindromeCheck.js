//Check if String is Palindrome or Not

class Solution {
  checkPalindrome(s, start, end) {
    if (start >= end) {
      return true;
    }
    if (s[start] !== s[end]) {
      return false;
    }
    return this.checkPalindrome(s, start + 1, end - 1);
  }
  palindromeCheck(s) {
    const ans = this.checkPalindrome(s, 0, s.length - 1);
    return ans;
  }
}

const result = new Solution();

console.log(result.palindromeCheck("hannah"));
