// https://programmers.co.kr/learn/courses/30/lessons/12914/solution_groups?language=javascript

function solution(n) {
  const arr = Array.from({ length: n }, () => 0);

  arr[0] = 1;
  arr[1] = 2;

  for (let i = 2; i < n; i++) {
    arr[i] = (arr[i - 2] + arr[i - 1]) % 1234567;
  }

  return arr[n - 1];
}
