function solution(N, stages) {
  const cur = Array.from({ length: N }, () => 0);
  let players = stages.length;
  const failure = [];

  for (const num of stages) {
    if (num <= N) {
      cur[num - 1]++;
    }
  }

  for (let i = 0; i < cur.length; i++) {
    failure.push([i + 1, cur[i] / players]);
    players -= cur[i];
  }

  failure.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : b[1] - a[1]));

  return failure.map((el) => el[0]);
}
