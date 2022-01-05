function solution(numbers, hand) {
  let answer = '';
  let leftPos = [3, 0];
  let rightPos = [3, 2];
  const pos = [
    [3, 1],
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 0],
    [1, 1],
    [1, 2],
    [2, 0],
    [2, 1],
    [2, 2],
  ];

  for (const num of numbers) {
    if (num % 3 === 1) {
      answer += 'L';
      leftPos = pos[num];
    } else if (num % 3 === 0 && num !== 0) {
      answer += 'R';
      rightPos = pos[num];
    } else {
      const curPos = pos[num];

      const leftDis =
        Math.abs(curPos[0] - leftPos[0]) + Math.abs(curPos[1] - leftPos[1]);
      const rightDis =
        Math.abs(curPos[0] - rightPos[0]) + Math.abs(curPos[1] - rightPos[1]);

      const dis = leftDis - rightDis;

      if (dis < 0 || (dis === 0 && hand === 'left')) {
        answer += 'L';
        leftPos = pos[num];
      }
      if (dis > 0 || (dis === 0 && hand === 'right')) {
        answer += 'R';
        rightPos = pos[num];
      }
    }
  }

  return answer;
}
