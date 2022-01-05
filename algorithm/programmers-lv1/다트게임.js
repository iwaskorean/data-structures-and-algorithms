function solution(dartResult) {
  let answer = [];
  let score = 0;

  for (let i = 0; i < dartResult.length; i++) {
    const cur = dartResult[i];

    if (!isNaN(cur)) {
      if (dartResult[i + 1] === '0') {
        score = 10;
        i++;
      } else {
        score = cur;
      }
    } else {
      switch (cur) {
        case 'S':
          answer.push(score ** 1);
          break;
        case 'D':
          answer.push(score ** 2);
          break;
        case 'T':
          answer.push(score ** 3);
          break;
        case '#':
          answer[answer.length - 1] *= -1;
          break;
        case '*':
          answer[answer.length - 2] *= 2;
          answer[answer.length - 1] *= 2;
          break;
      }
      score = 0;
    }
  }

  return answer.reduce((acc, cur) => acc + cur, 0);
}
