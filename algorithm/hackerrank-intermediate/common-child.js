// https://www.hackerrank.com/challenges/common-child/problem?isFullScreen=true

function commonChild(s1, s2) {
  const [len1, len2] = [s1.length, s2.length];
  const dp = Array.from({ length: len2 + 1 }, () => Array(len1 + 1).fill(0));

  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[len1][len2];
}

// Hint: LCS(Longest Common Subsequence)
