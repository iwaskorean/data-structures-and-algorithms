// https://programmers.co.kr/learn/courses/30/lessons/76502

function solution(s) {
  if (s.length < 1) {
    return 0;
  }

  let answer = isValid(s) ? 1 : 0;

  for (let i = 1; i < s.length; i++) {
    s = s.slice(1) + s[0];
    if (isValid(s)) {
      answer++;
    }
  }

  return answer;
}

function isValid(s) {
  const stack = [];

  for (const x of s) {
    if (x === ')') {
      if (stack[stack.length - 1] !== '(') {
        return false;
      }
      stack.pop();
    } else if (x === '}') {
      if (stack[stack.length - 1] !== '{') {
        return false;
      }
      stack.pop();
    } else if (x === ']') {
      if (stack[stack.length - 1] !== '[') {
        return false;
      }
      stack.pop();
    } else {
      stack.push(x);
    }
  }

  return !stack.length;
}
