// https://programmers.co.kr/learn/courses/30/lessons/17676

function solution(lines) {
  const logs = lines.map((line) => line.split(' '));
  const infos = [];
  let count = 0;
  let max = 0;

  for (let [_, res, time] of logs) {
    const start =
      convertToMilliSec(res) - time.slice(0, time.length - 1) * 1000 + 1;
    const end = convertToMilliSec(res) + 999;

    infos.push([1, start]);
    infos.push([0, end]);
  }

  infos.sort((a, b) => (a[1] === b[1] ? b[0] - a[0] : a[1] - b[1]));

  for (const [flag] of infos) {
    if (flag) {
      count++;
      max = Math.max(max, count);
    } else {
      count--;
    }
  }

  return max;
}

function convertToMilliSec(time) {
  const [hours, mins, secs, msecs] = time.split(/[:.]/g);
  return (hours * 60 * 60 + mins * 60 + secs * 1) * 1000 + msecs * 1;
}

// 처음 풀이: 시간 초과
// Hint
// - 요청량이 변하는 순간은 각 로그의 시작과 끝이다.
// - 처리 종료 시간은 응답 완료 시간을 포함한 초이므로 응답 완료 시간에 999ms를 더해주어야 한다.
// https://tech.kakao.com/2017/09/27/kakao-blind-recruitment-round-1/#7-%EC%B6%94%EC%84%9D-%ED%8A%B8%EB%9E%98%ED%94%BD%EB%82%9C%EC%9D%B4%EB%8F%84-%EC%83%81
