function solution(numbers) {
  let answer = [];
  const len = numbers.length;
  const ch = Array.from({ length: len }, () => 0);

  function DFS(L, num) {
    if (isPrime(num) && !answer.includes(num)) {
      answer.push(num);
    }
    if (L > len) {
      return;
    } else {
      for (let i = 0; i < len; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          DFS(L + 1, (num + numbers[i]) * 1);
          ch[i] = 0;
        }
      }
    }
  }

  DFS(0, 0);

  return answer.length;
}

function isPrime(num) {
  if (num < 2) {
    return false;
  }

  if (num === 2 || num === 3) {
    return true;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}
