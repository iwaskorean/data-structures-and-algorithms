// https://programmers.co.kr/learn/courses/30/lessons/43162

function solution(n, computers) {
  let answer = 0;
  const ch = Array.from({ length: n }, () => 0);

  function DFS(i) {
    ch[i] = 1;
    for (let j = 0; j < n; j++) {
      if (computers[i][j] && ch[j] === 0) {
        DFS(j);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (ch[i] === 0) {
      DFS(i);
      answer++;
    }
  }

  return answer;
}
