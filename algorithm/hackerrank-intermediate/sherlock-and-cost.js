// https://www.hackerrank.com/challenges/sherlock-and-cost/problem?isFullScreen=true

function cost(B) {
  const n = B.length;
  const dp = Array.from({ length: n }, () => [0, 0]);
  const { max, abs } = Math;

  for (let i = 1; i < n; i++) {
    dp[i][0] = max(
      abs(B[i] - B[i - 1]) + dp[i - 1][0],
      abs(B[i] - 1) + dp[i - 1][1]
    );
    dp[i][1] = max(abs(1 - B[i - 1]) + dp[i - 1][0], dp[i - 1][1]);
  }

  return max(...dp[n - 1]);
}

// Hint: dynamic programming
// dp[i][0] -> A[i] = B[i]
// dp[i][1] -> A[i] = 0
