// https://programmers.co.kr/learn/courses/30/lessons/17678

function solution(n, t, m, timetable) {
  const times = timetable.map(
    (time) => time.slice(0, 2) * 60 + time.slice(3, 5) * 1
  );
  const buses = Array.from({ length: n }, () => 0);
  let crewIndex = 0;
  let busTime = 9 * 60 - t;

  times.sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    let current = 0;
    busTime += t;

    for (let j = crewIndex; j < times.length; j++) {
      if (times[crewIndex] <= busTime) {
        crewIndex++;
        current++;
      }

      if (current === m) {
        buses[i] = 1;
        break;
      }
    }
  }

  if (buses[n - 1]) {
    return converTimeStr(times[crewIndex - 1] - 1);
  }

  return converTimeStr(busTime);
}

function converTimeStr(time) {
  const hours = Math.floor(time / 60);
  const mins = time % 60;
  return `${converTwoDigit(hours)}:${converTwoDigit(mins)}`;
}

function converTwoDigit(num) {
  return num < 10 ? '0' + num : num;
}
// String.prototype.padStart
