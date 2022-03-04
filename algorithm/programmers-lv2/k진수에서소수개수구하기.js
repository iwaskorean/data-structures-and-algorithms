function solution(n, k) {
  const targets = n.toString(k).split(/0+/);

  for (const target of targets) {
    if (isPrime(target)) {
      answer++;
    }
  }

  return answer;
}

function isPrime(n) {
  if (n < 2) {
    return false;
  }

  if (n === 2 || n === 3) {
    return true;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}
