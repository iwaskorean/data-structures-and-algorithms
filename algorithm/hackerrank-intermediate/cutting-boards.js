// https://www.hackerrank.com/challenges/board-cutting/problem?isFullScreen=true

function boardCutting(cost_y, cost_x) {
  let answer = BigInt(0);
  let [row, col, x, y] = [1, 1, 0, 0];
  const [m, n] = [cost_y.length, cost_x.length];

  cost_y.sort((a, b) => b - a);
  cost_x.sort((a, b) => b - a);

  while (x < n && y < m) {
    if (cost_x[x] > cost_y[y]) {
      answer += BigInt(row * cost_x[x++]);
      col++;
    } else {
      answer += BigInt(col * cost_y[y++]);
      row++;
    }
  }

  while (x < n) {
    answer += BigInt(row * cost_x[x++]);
  }

  while (y < m) {
    answer += BigInt(col * cost_y[y++]);
  }

  return answer % BigInt(10 ** 9 + 7);
}
