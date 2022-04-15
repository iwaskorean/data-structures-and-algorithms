// https://programmers.co.kr/learn/courses/30/lessons/42884

function solution(routes) {
  routes.sort((a, b) => a[1] - b[1]);
  let camPos = routes[0][1];
  let answer = 1;

  for (let i = 1; i < routes.length; i++) {
    if (routes[i][0] <= camPos) {
      continue;
    } else {
      camPos = routes[i][1];
      answer++;
    }
  }

  return answer;
}
