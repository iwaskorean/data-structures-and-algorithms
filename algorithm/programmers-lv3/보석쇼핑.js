// https://programmers.co.kr/learn/courses/30/lessons/67258

function solution(gems) {
  const answer = [0, 0];
  const count = new Set(gems).size;
  let len = gems.length;
  let [lt, rt] = [0, 0];

  const map = new Map();
  map.set(gems[rt], 1);

  while (rt < gems.length) {
    if (map.size < count) {
      rt++;
      if (map.has(gems[rt])) {
        map.set(gems[rt], map.get(gems[rt]) + 1);
      } else {
        map.set(gems[rt], 1);
      }
    } else {
      if (rt - lt < len) {
        len = rt - lt;
        [answer[0], answer[1]] = [lt + 1, rt + 1];
      }

      map.set(gems[lt], map.get(gems[lt]) - 1);
      if (!map.get(gems[lt])) {
        map.delete(gems[lt]);
      }

      lt++;
    }
  }

  return answer;
}

// 처음 풀이: 정확성O 효율성 X
// Hint: map + 투포인터(https://tech.kakao.com/2020/07/01/2020-internship-test/)
