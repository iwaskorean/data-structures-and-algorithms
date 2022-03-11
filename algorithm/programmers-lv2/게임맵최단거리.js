// https://programmers.co.kr/learn/courses/30/lessons/1844

function solution(maps) {
  let answer = 1;
  const [n, m] = [maps.length, maps[0].length];
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];
  const queue = [];

  queue.push([0, 0]);
  maps[0][0] = 1;

  while (queue.length) {
    const len = queue.length;

    for (let i = 0; i < len; i++) {
      const [x, y] = queue.shift();

      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx > -1 && ny > -1 && nx < n && ny < m && maps[nx][ny] === 1) {
          if (nx === n - 1 && ny === m - 1) {
            return answer + 1;
          }
          queue.push([nx, ny]);
          maps[nx][ny] = 0;
        }
      }
    }
    answer++;
  }

  return -1;
}

// DFS 효율성 테스트 X -> BFS

// function solution(maps) {
//   let answer = Infinity;
//   const [n, m] = [maps.length, maps[0].length];
//   const dx = [1, 0, -1, 0];
//   const dy = [0, 1, 0, -1];

//   function DFS(x, y, count) {
//     if (count > answer) {
//       return;
//     }
//     if (x === n - 1 && y === m - 1) {
//       answer = Math.min(answer, count);
//     } else {
//       for (let i = 0; i < 4; i++) {
//         const nx = x + dx[i];
//         const ny = y + dy[i];

//         if (nx > -1 && ny > -1 && nx < n && ny < m && maps[nx][ny] === 1) {
//           maps[x][y] = 0;
//           DFS(nx, ny, count + 1);
//           maps[x][y] = 1;
//         }
//       }
//     }
//   }

//   DFS(0, 0, 1);
//   return answer === Infinity ? -1 : answer;
// }
