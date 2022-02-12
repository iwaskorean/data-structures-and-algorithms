// https://programmers.co.kr/learn/courses/30/lessons/77485

function solution(rows, columns, queries) {
  const answer = [];
  const matrix = Array.from({ length: rows }, (_, i) =>
    Array(columns)
      .fill(0)
      .map((_, j) => i * columns + j + 1)
  );

  for (let [x1, y1, x2, y2] of queries) {
    [x1, y1, x2, y2] = [x1 - 1, y1 - 1, x2 - 1, y2 - 1];

    let min = matrix[x1][y2];

    for (let i = y2; i > y1; i--) {
      [matrix[x1][i], matrix[x1][i - 1]] = [matrix[x1][i - 1], matrix[x1][i]];
      min = Math.min(matrix[x1][i], min);
    }

    for (let i = x1; i < x2; i++) {
      [matrix[i][y1], matrix[i + 1][y1]] = [matrix[i + 1][y1], matrix[i][y1]];
      min = Math.min(matrix[i][y1], min);
    }

    for (let i = y1; i < y2; i++) {
      [matrix[x2][i], matrix[x2][i + 1]] = [matrix[x2][i + 1], matrix[x2][i]];
      min = Math.min(matrix[x2][i], min);
    }

    for (let i = x2; i > x1 + 1; i--) {
      [matrix[i][y2], matrix[i - 1][y2]] = [matrix[i - 1][y2], matrix[i][y2]];
      min = Math.min(matrix[i][y2], min);
    }

    answer.push(min);
  }

  return answer;
}
