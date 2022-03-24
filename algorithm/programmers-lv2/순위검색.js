// https://programmers.co.kr/learn/courses/30/lessons/72412

function solution(info, query) {
  const answer = [];
  const map = {};

  function combination(arr, index, score) {
    const key = arr.join('');

    if (map[key]) {
      map[key].push(score);
    } else {
      map[key] = [score];
    }

    for (let i = index; i < arr.length; i++) {
      const cur = [...arr];
      cur[i] = '-';
      combination(cur, i + 1, score);
    }
  }

  for (const infoStr of info) {
    const infoArr = infoStr.split(' ');
    const score = infoArr.pop() * 1;

    combination(infoArr, 0, score);
  }

  for (const key of Object.getOwnPropertyNames(map)) {
    map[key].sort((a, b) => a - b);
  }

  for (const queryStr of query) {
    const queryArr = queryStr.split(/\sand\s|\s/);
    const target = queryArr.pop();
    const key = queryArr.join('');
    const scores = map[key];

    if (scores) {
      let start = 0;
      let end = scores.length;

      while (start < end) {
        const mid = Math.floor((start + end) / 2);

        if (scores[mid] < target) {
          start = mid + 1;
        } else {
          end = mid;
        }
      }

      answer.push(scores.length - start);
    } else {
      answer.push(0);
    }
  }

  return answer;
}

// 효율성 테스트 X -> 카카오 풀이 참고
// Hint: https://tech.kakao.com/2021/01/25/2021-kakao-recruitment-round-1/
