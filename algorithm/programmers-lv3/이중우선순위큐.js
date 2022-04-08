// https://programmers.co.kr/learn/courses/30/lessons/42628

function solution(operations) {
  const ops = operations.map((operation) => operation.split(' '));
  const queue = [];
  let prev;

  for (const [cmd, num] of ops) {
    if (cmd === 'I') {
      queue.push(num);
    }

    if (cmd === 'D') {
      if (prev === 'I') {
        queue.sort((a, b) => a - b);
      }

      if (num === '-1') {
        queue.shift();
      } else {
        queue.pop();
      }
    }
    prev = cmd;
  }

  if (queue.length) {
    if (prev === 'I') {
      queue.sort((a, b) => a - b);
    }
    return [queue[queue.length - 1] * 1, queue[0] * 1];
  }

  return [0, 0];
}
