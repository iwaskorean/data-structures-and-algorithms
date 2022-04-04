// https://programmers.co.kr/learn/courses/30/lessons/49191

function solution(n, results) {
  const adj = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
  const info = Array.from({ length: n + 1 }, () => [0, 0]); // [win, lose]
  let ch;

  for (const [p1, p2] of results) {
    adj[p1][p2] = 1;
  }

  function DFS(n, start) {
    ch[n] = 1;
    for (let i = 1; i < adj[n].length; i++) {
      if (adj[n][i] === 1 && ch[i] === 0) {
        info[start][0]++;
        info[i][1]++;
        DFS(i, start);
      }
    }
  }

  for (let i = 1; i < adj.length; i++) {
    ch = Array.from({ length: n + 1 }, () => 0);
    DFS(i, i);
  }

  return info.filter((result) => result[0] + result[1] === n - 1).length;
}
