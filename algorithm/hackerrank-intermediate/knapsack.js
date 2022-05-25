// https://www.hackerrank.com/challenges/unbounded-knapsack/problem?isFullScreen=true

function unboundedKnapsack(k, arr) {
  const dp = Array.from({ length: k + 1 }, () => 0);

  dp[0] = 1;

  for (let i = 1; i <= k; i++) {
    for (const num of arr) {
      if (!dp[i] && i >= num) {
        dp[i] = dp[i - num];
      }
    }
  }

  for (let i = k; i >= 0; i--) {
    if (dp[i]) {
      return i;
    }
  }
}
