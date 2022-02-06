// https://programmers.co.kr/learn/courses/30/lessons/42842

function solution(brown, yellow) {
  for (let yh = 1; yh <= Math.sqrt(yellow); yh++) {
    const yw = yellow / yh;
    const bw = yw + 2;
    const bh = yh + 2;

    if (brown === (bw + bh) * 2 - 4) {
      return [bw, bh];
    }
  }
}
