// https://www.hackerrank.com/challenges/icecream-parlor/problem?isFullScreen=true

function icecreamParlor(m, arr) {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    const cur = arr[i];
    const diff = m - cur;

    if (map.has(diff)) {
      return [map.get(diff), i + 1];
    }

    map.set(cur, i + 1);
  }
}
