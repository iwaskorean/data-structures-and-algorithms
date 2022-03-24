// https://programmers.co.kr/learn/courses/30/lessons/49189

function solution(n, edge) {
  const adj = Array.from({ length: n + 1 }, () => []);
  const ch = Array.from({ length: n + 1 }, () => 0);
  const queue = [];
  let lastNodes = [];

  for (const [n1, n2] of edge) {
    adj[n1].push(n2);
    adj[n2].push(n1);
  }

  ch[1] = 1;
  for (const node of adj[1]) {
    queue.push(node);
    ch[node] = 1;
  }

  while (queue.length) {
    const len = queue.length;

    lastNodes = [...queue];

    for (let i = 0; i < len; i++) {
      const node = queue.shift();

      for (const next of adj[node]) {
        if (ch[next] === 0) {
          ch[next] = 1;
          queue.push(next);
        }
      }
    }
  }

  return lastNodes.length;
}
