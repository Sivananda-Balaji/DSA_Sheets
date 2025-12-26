//Reverse a String I

class Solution {
  reverse(s, start, end) {
    if (start > end) {
      return;
    }
    [s[start], s[end]] = [s[end], s[start]];
    this.reverse(s, start + 1, end - 1);
  }
  reverseString(s) {
    this.reverse(s, 0, s.length - 1);
    return s;
  }
}

const result = new Solution();

console.log(result.reverseString(["h", "e", "l", "l", "o"]));
