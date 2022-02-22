// https://programmers.co.kr/learn/courses/30/lessons/92341

function solution(fees, records) {
  const recordsArr = records.map((record) => record.split(' '));
  const infoMap = new Map();
  const timeMap = new Map();

  for (const [time, car, info] of recordsArr) {
    if (info === 'IN') {
      infoMap.set(car, time);
    } else {
      const mins =
        time.slice(0, 2) * 60 +
        time.slice(3) * 1 -
        (infoMap.get(car).slice(0, 2) * 60 + infoMap.get(car).slice(3) * 1);

      if (timeMap.has(car)) {
        timeMap.set(car, timeMap.get(car) + mins);
      } else {
        timeMap.set(car, mins);
      }

      infoMap.delete(car);
    }
  }

  if (infoMap.size) {
    for (const [car, time] of infoMap) {
      const mins = (23 - time.slice(0, 2)) * 60 + (59 - time.slice(3) * 1);

      if (timeMap.has(car)) {
        timeMap.set(car, timeMap.get(car) + mins);
      } else {
        timeMap.set(car, mins);
      }
    }
  }

  return [...timeMap]
    .sort((a, b) => a[0] * 1 - b[0] * 1)
    .map((info) =>
      info[1] <= fees[0]
        ? fees[1]
        : fees[1] + Math.ceil((info[1] - fees[0]) / fees[2]) * fees[3]
    );
}
