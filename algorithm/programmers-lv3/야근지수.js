// https://programmers.co.kr/learn/courses/30/lessons/12927#

function solution(n, works) {
  const len = works.length;
  const sum = works.reduce((acc, cur) => acc + cur, 0);

  if (n >= sum) {
    return 0;
  }

  works.sort((a, b) => b - a);

  while (n) {
    const max = works[0];

    for (let i = 0; i < len; i++) {
      if (works[i] >= max) {
        works[i] -= 1;
        n--;
      }
      if (!n) {
        break;
      }
    }
  }

  return works.reduce((acc, cur) => acc + cur ** 2, 0);
}
