// https://programmers.co.kr/learn/courses/30/lessons/72413

function solution(n, s, a, b, fares) {
  let answer = 100001 * n;
  const adj = Array.from({ length: n + 1 }, () => []);

  for (const [n1, n2, weight] of fares) {
    adj[n1].push([n2, weight]);
    adj[n2].push([n1, weight]);
  }

  const distA = getDist(adj, n, a);
  const distB = getDist(adj, n, b);
  const distS = getDist(adj, n, s);

  for (let i = 1; i <= n; i++) {
    answer = Math.min(answer, distS[i] + distA[i] + distB[i]);
  }

  return answer;
}

function getDist(adj, n, node) {
  const dist = Array.from({ length: n + 1 }, () => 100001 * n);
  const queue = [];

  queue.push([node, 0]);
  dist[node] = 0;

  while (queue.length) {
    const current = queue.shift()[0];

    for (const [next, nextWeight] of adj[current]) {
      if (dist[current] + nextWeight < dist[next]) {
        dist[next] = dist[current] + nextWeight;
        queue.push([next, nextWeight]);
      }
    }
  }

  return dist;
}
