// https://www.hackerrank.com/challenges/pairs/problem?isFullScreen=true

function pairs(k, arr) {
  let answer = 0;
  let [lt, rt] = [0, 1];
  const n = arr.length;

  arr.sort((a, b) => a - b);

  while (rt < n) {
    const v1 = arr[lt];
    const v2 = arr[rt];

    if (Math.abs(v1 - v2) < k) {
      rt++;
    } else if (Math.abs(v1 - v2) > k) {
      lt++;
    } else {
      answer++;
      rt++;
    }
  }

  return answer;
}
