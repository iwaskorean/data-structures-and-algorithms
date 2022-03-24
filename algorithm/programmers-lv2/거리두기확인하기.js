// https://programmers.co.kr/learn/courses/30/lessons/81302

function solution(places) {
  const answer = [];
  const len = 5;
  const dx = [0, -1, 0, 1];
  const dy = [-1, 0, 1, 0];
  const queue = [];

  for (const place of places) {
    const ch = Array.from({ length: len }, () => Array(len).fill(0));
    let result = 1;

    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        if (place[i][j] === 'P') {
          queue.push([i, j]);

          while (queue.length) {
            const [x, y] = queue.shift();
            ch[x][y] = 1;
            for (let k = 0; k < 4; k++) {
              const nx = x + dx[k];
              const ny = y + dy[k];

              if (
                nx >= 0 &&
                nx < len &&
                ny >= 0 &&
                ny < len &&
                Math.abs(i - nx) + Math.abs(j - ny) <= 2 &&
                ch[nx][ny] === 0
              ) {
                if (place[nx][ny] === 'P') {
                  result = 0;
                  i = j = len;
                  break;
                }
                if (place[nx][ny] !== 'X') {
                  queue.push([nx, ny]);
                }
              }
            }
          }
        }
      }
    }
    answer.push(result);
  }

  return answer;
}
