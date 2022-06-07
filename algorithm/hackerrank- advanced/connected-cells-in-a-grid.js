// https://www.hackerrank.com/challenges/connected-cell-in-a-grid/problem?isFullScreen=true

function connectedCell(matrix) {
  let answer = 0;
  let region = 1;
  const [n, m] = [matrix.length, matrix[0].length];
  const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  const dy = [0, 1, 1, 1, 0, -1, -1, -1];

  function DFS(x, y) {
    for (let i = 0; i < dx.length; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && nx < n && ny >= 0 && ny < m && matrix[nx][ny]) {
        matrix[nx][ny] = 0;
        region++;
        DFS(nx, ny);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j]) {
        matrix[i][j] = 0;
        DFS(i, j);
        answer = Math.max(answer, region);
        region = 1;
      }
    }
  }

  return answer;
}
