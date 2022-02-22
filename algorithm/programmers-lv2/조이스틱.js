// https://programmers.co.kr/learn/courses/30/lessons/42860#

function solution(name) {
  let answer = 0;
  const len = name.length;
  let move = len - 1;

  for (let i = 0; i < len; i++) {
    const up = name[i].charCodeAt() - 65;
    const down = 26 - up;

    answer += Math.min(up, down);

    let next = i + 1;
    while (next < len && name[next] === 'A') {
      next++;
    }

    // Hint
    move = Math.min(move, i * 2 + len - next, (len - next) * 2 + i);
    // move = Math.min(move, i * 2 + len - next); // #1
    // move = Math.min(move, (len - next) * 2 + i); // #2
  }

  answer += move;

  return answer;
}

// Hint

// #1: 다음 문자가 A 일 때 뒤로 커서를 왼쪽으로 이동해서 계산
// 처음 위치로 돌아간 횟수(i*2) + 문자열길이 - A가 연속으로 나오는 지점의 다음 값

// #2: 처음부터 뒷부분을 먼저 입력하고 다시 처음으로 돌아와서 계산
// (문자열길이 - A가 연속으로 나오는 지점의 다음 값) * 2 + i

// ABBBBAAAAAAAB
// #1: 14
// #1+#2: 11
