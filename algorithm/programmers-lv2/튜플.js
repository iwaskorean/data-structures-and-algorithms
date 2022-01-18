function solution(s) {
  const arr = s
    .slice(2, s.length - 2)
    .split('},{')
    .map((el) => el.split(','))
    .flat();
  const counts = [];
  const map = new Map();

  for (const num of arr) {
    if (map.get(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }

  for (const [key, value] of map) {
    counts.push([key, value]);
  }

  counts.sort((a, b) => b[1] - a[1]);

  return counts.map((el) => el[0] * 1);
}
