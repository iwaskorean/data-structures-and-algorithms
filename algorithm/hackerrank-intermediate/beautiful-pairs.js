// https://www.hackerrank.com/challenges/beautiful-pairs/problem?isFullScreen=true

function beautifulPairs(A, B) {
  const map = new Map();
  let pairs = 0;

  for (const a of A) {
    map.set(a, map.get(a) + 1 || 1);
  }

  for (const b of B) {
    if (map.get(b)) {
      pairs++;
      map.set(b, map.get(b) - 1);
    }
  }

  return pairs < A.length ? pairs + 1 : pairs - 1;
}
