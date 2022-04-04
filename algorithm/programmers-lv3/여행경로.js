// https://programmers.co.kr/learn/courses/30/lessons/43164

function solution(tickets) {
  const answer = [];
  const len = tickets.length;
  const ch = Array.from({ length: len }, () => 0);
  let flag;

  tickets.sort();

  function DFS(city, level) {
    answer.push(city);

    if (level === len) {
      flag = 1;
      return;
    } else {
      for (let i = 0; i < len; i++) {
        if (tickets[i][0] === city && !ch[i]) {
          ch[i] = 1;
          DFS(tickets[i][1], level + 1);
          ch[i] = 0;
        }
        if (flag) {
          return;
        }
      }
    }
    answer.pop();
  }

  DFS('ICN', 0);

  return answer;
}

// Hint
// 다음 경로가 없는 경우, 똑같은 항공권이 있는 경우 고려
