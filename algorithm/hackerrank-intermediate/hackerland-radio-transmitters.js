// https://www.hackerrank.com/challenges/hackerland-radio-transmitters/problem?isFullScreen=true

function hackerlandRadioTransmitters(x, k) {
  let answer = 0;
  const len = x.length;
  const ch = Array.from({ length: x[len - 1] + 1 }, () => 0);

  x.sort((a, b) => a - b);

  for (const housePos of x) {
    ch[housePos] = 1;
  }

  let i = x[0];
  while (i <= x[len - 1]) {
    if (ch[i]) {
      let nextIndex = 0;

      for (let j = 1; j <= k; j++) {
        if (ch[i + j]) {
          nextIndex = i + j;
        }
      }

      if (nextIndex) {
        i = nextIndex + k + 1;
      } else {
        i += k + 1;
      }

      answer++;
    } else {
      i++;
    }
  }

  return answer;
}
