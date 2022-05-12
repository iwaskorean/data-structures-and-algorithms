// https://programmers.co.kr/learn/courses/30/lessons/67259

function solution(board) {
  const MAX = Number.MAX_SAFE_INTEGER;
  let answer = MAX;
  const len = board.length;
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  const ch = [];

  for (let i = 0; i < len; i++) {
    ch.push([]);
    for (let j = 0; j < len; j++) {
      ch[i].push([MAX, MAX, MAX, MAX]);
    }
  }

  function DFS(x, y, cost, dir) {
    if (cost > answer) {
      return;
    }

    if (x === len - 1 && y === len - 1) {
      answer = Math.min(answer, cost);
    } else {
      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx >= 0 && nx < len && ny >= 0 && ny < len && !board[nx][ny]) {
          board[nx][ny] = 1;

          let newCost = cost + 100;

          if ((dir + i) % 2) {
            newCost += 500;
          }

          if (newCost < ch[nx][ny][i]) {
            ch[nx][ny][i] = newCost;
            DFS(nx, ny, newCost, i);
          }

          board[nx][ny] = 0;
        }
      }
    }
  }

  board[0][0] = 1;
  DFS(0, 0, 0, 'start');

  return answer;
}

// Hint
// 최소 비용을 고려할 때 위치뿐만 아니라 방향도 고려해야 한다.
