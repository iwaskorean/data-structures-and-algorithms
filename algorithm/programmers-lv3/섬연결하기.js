// https://programmers.co.kr/learn/courses/30/lessons/42861

function solution(n, costs) {
  let answer = 0;
  const parent = Array.from({ length: n }, (_, i) => i);

  function getParent(node) {
    return parent[node] === node ? node : getParent(parent[node]);
  }

  costs.sort((a, b) => a[2] - b[2]);

  for (const [n1, n2, cost] of costs) {
    const [p1, p2] = [getParent(n1), getParent(n2)];

    if (p1 !== p2) {
      answer += cost;
      if (p1 < p2) {
        parent[p2] = p1;
      } else {
        parent[p1] = p2;
      }
    }
  }

  return answer;
}

// Hint
// union find, 크루스칼 알고리즘
