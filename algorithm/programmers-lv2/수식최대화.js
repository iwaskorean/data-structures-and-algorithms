// https://programmers.co.kr/learn/courses/30/lessons/67257?language=javascript

function solution(expression) {
  let answer = 0;
  const nums = expression.split(/[^0-9]/g);
  const ops = expression.split('').filter((el) => isNaN(el));
  const cases = [
    ['+', '-', '*'],
    ['+', '*', '-'],
    ['-', '+', '*'],
    ['-', '*', '+'],
    ['*', '+', '-'],
    ['*', '-', '+'],
  ];

  for (let i = 0; i < cases.length; i++) {
    const _ops = [...ops];
    const _nums = [...nums];

    for (let j = 0; j < 3; j++) {
      for (let k = 0; k < _ops.length; k++) {
        if (_ops[k] === cases[i][j]) {
          const result = calc(_nums[k], _ops[k], _nums[k + 1]);
          _nums[k] = result;
          _nums.splice(k + 1, 1);
          _ops.splice(k, 1);
          k--;
        }
      }
    }
    answer = Math.max(answer, Math.abs(_nums[0]));
  }

  return answer;
}

function calc(num1, op, num2) {
  num1 *= 1;
  num2 *= 1;

  switch (op) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
  }
}

// Hint
// +, -, *에 대한 우선순위를 만들어 놓고
// 하나하나 비교해보면서 최대값 구하기
