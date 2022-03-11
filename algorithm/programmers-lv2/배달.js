// https://programmers.co.kr/learn/courses/30/lessons/12978

function solution(N, road, K) {
  const len = N + 1;
  const adj = Array.from({ length: len }, () => []);
  const dist = Array.from({ length: len }, () => 500000);
  const queue = [];
  let answer = 0;

  for (const [n1, n2, weight] of road) {
    adj[n1].push([n2, weight]);
    adj[n2].push([n1, weight]);
  }

  queue.push([1, 0]);
  dist[1] = 0;
  while (queue.length) {
    const current = queue.shift()[0];

    for (const [next, nextWeight] of adj[current]) {
      if (dist[current] + nextWeight < dist[next]) {
        dist[next] = dist[current] + nextWeight;
        queue.push([next, nextWeight]);
      }
    }
  }

  for (const distance of dist) {
    if (distance <= K) {
      answer++;
    }
  }

  return answer;
}

// Hint
// DFS -> 다익스트라
