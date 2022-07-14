// https://www.hackerrank.com/challenges/palindrome-index/problem?isFullScreen=true

function palindromeIndex(s) {
  const len = s.length;

  for (let i = 0; i < len / 2; i++) {
    if (s[i] !== s[len - i - 1]) {
      if (isPalindrome(i, s)) {
        return i;
      }

      return len - i - 1;
    }
  }

  return -1;
}

function isPalindrome(index, s) {
  const sliced = s.slice(0, index) + s.slice(index + 1);
  const len = sliced.length;

  for (let i = 0; i < len / 2; i++) {
    if (sliced[i] !== sliced[len - i - 1]) {
      return false;
    }
  }

  return true;
}
