// https://programmers.co.kr/learn/courses/30/lessons/42895

function solution(N, number) {
  const limit = 8;

  if (N === number) {
    return 1;
  }

  const arr = Array.from({ length: limit + 1 }, () => []);
  //   const arr = Array.from({ length: limit + 1 }, () => new Set());
  arr[1].push(N);
  //   arr[1].add(N);

  for (let i = 2; i <= limit; i++) {
    const temp = [];
    for (let j = 1; j < i; j++) {
      for (const prev1 of arr[j]) {
        for (const prev2 of arr[i - j]) {
          temp.push(prev1 + prev2);
          temp.push(prev1 - prev2);
          temp.push(prev1 / prev2);
          temp.push(prev1 * prev2);
          // arr[i].add(...);
        }
      }
    }
    temp.push('1'.repeat(i) * N);

    arr[i].push(...new Set(temp));

    if (arr[i].includes(number)) {
      // if (arr[i].has(number)) {
      return i;
    }
  }

  return -1;
}

// Hint
// j(1 < i) j번 결과와 i-j번 결과의 사칙 연산으로 i번째 결과를 구한다.
// dp에 사용할 배열을 처음부터 Set으로 초기화하는게 더 빠르다.
