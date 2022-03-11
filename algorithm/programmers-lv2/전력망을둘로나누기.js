// https:programmers.co.kr/learn/courses/30/lessons/86971

function solution(n, wires) {
  let answer = 100;
  let count = 0;
  const adj = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
  const ch = Array.from({ length: n + 1 }, () => 0);

  for (const [v1, v2] of wires) {
    adj[v1][v2] = 1;
    adj[v2][v1] = 1;
  }

  function DFS(node) {
    ch[node] = 1;
    count++;

    for (let i = 1; i <= n; i++) {
      if (ch[i] === 0 && adj[node][i]) {
        DFS(i);
      }
    }

    ch[node] = 0;
  }

  for (const [v1, v2] of wires) {
    adj[v1][v2] = 0;
    adj[v2][v1] = 0;
    DFS(1);
    adj[v1][v2] = 1;
    adj[v2][v1] = 1;

    answer = Math.min(answer, Math.abs(n - count * 2));
    count = 0;
  }

  return answer;
}

// Hint
// 인접행렬 DFS
