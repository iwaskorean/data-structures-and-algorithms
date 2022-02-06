// https://programmers.co.kr/learn/courses/30/lessons/42883

function solution(number, k) {
  const stack = [];
  let cnt = k;

  for (const num of number) {
    while (num > stack[stack.length - 1] && cnt) {
      stack.pop();
      cnt--;
    }
    stack.push(num);
  }

  while (cnt) {
    stack.pop();
    cnt--;
  }

  return stack.join('');
}
