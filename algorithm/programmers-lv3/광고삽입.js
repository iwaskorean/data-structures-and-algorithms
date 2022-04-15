// https://programmers.co.kr/learn/courses/30/lessons/72414

function solution(play_time, adv_time, logs) {
  const advTime = convertToSec(adv_time);
  const playTime = convertToSec(play_time);
  const times = Array.from({ length: playTime }, () => 0);
  const secLogs = logs
    .map((log) => log.split('-'))
    .map(([st, end]) => [convertToSec(st), convertToSec(end)]);

  for (const [st, end] of secLogs) {
    times[end] -= 1;
    times[st] += 1;
  }

  for (let i = 1; i < playTime; i++) {
    times[i] += times[i - 1];
  }

  for (let i = 1; i < playTime; i++) {
    times[i] += times[i - 1];
  }

  let maxTime = times[advTime - 1];
  let index = 0;

  for (let i = advTime - 1; i < playTime; i++) {
    if (times[i] - times[i - advTime] > maxTime) {
      maxTime = times[i] - times[i - advTime];
      index = i - advTime + 1;
    }
  }

  return convertToStr(index);
}

function convertToSec(str) {
  const [hours, mins, secs] = str.split(':');

  return hours * 60 * 60 + mins * 60 + secs * 1;
}

function convertToStr(sec) {
  const hours = Math.floor(sec / (60 * 60)) + '';
  const mins = Math.floor((sec % (60 * 60)) / 60) + '';
  const secs = Math.floor(sec % 60) + '';

  return (
    hours.padStart(2, 0) + ':' + mins.padStart(2, 0) + ':' + secs.padStart(2, 0)
  );
}

// Hint
// 누적 재생 횟수 구하기
// https://tech.kakao.com/2021/01/25/2021-kakao-recruitment-round-1/#%EB%AC%B8%EC%A0%9C-5-%EA%B4%91%EA%B3%A0-%EC%82%BD%EC%9E%85
