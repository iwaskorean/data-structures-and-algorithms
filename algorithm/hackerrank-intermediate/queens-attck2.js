// https://www.hackerrank.com/challenges/queens-attack-2/problem?isFullScreen=true

function queensAttack(n, k, r_q, c_q, obstacles) {
  let answer = 0;
  const obstaclesMap = new Map();
  const dx = [1, 1, 1, 0, -1, -1, -1, 0];
  const dy = [-1, 0, 1, 1, 1, 0, -1, -1];

  for (let i = 0; i < k; i++) {
    const [x, y] = obstacles[i];
    obstaclesMap.set(x + ',' + y, 1);
  }

  for (let i = 0; i < dx.length; i++) {
    let [x, y] = [r_q, c_q];

    while (true) {
      x += dx[i];
      y += dy[i];

      if (
        x > 0 &&
        x <= n &&
        y > 0 &&
        y <= n &&
        !obstaclesMap.has(x + ',' + y)
      ) {
        answer++;
      } else {
        break;
      }
    }
  }

  return answer;
}
