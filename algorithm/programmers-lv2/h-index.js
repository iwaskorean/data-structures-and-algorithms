function solution(citations) {
  citations.sort((a, b) => b - a);

  for (let i = 0; i < citations.length; i++) {
    if (i >= citations[i]) {
      return i;
    }
  }

  return citations.length;
}

// 문제 이해하는데 오래 걸렸음
// 전체 논문을 내림차순으로 정렬하고
// 피인용수가 논문수와 같아지거나 피인용수가 논문수보다 작아지기 시작하는 숫자가 h 인덱스가 됨
// 참고: https://www.ibric.org/myboard/read.php?Board=news&id=270333
