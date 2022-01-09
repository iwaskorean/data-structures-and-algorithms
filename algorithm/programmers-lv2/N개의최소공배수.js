function solution(arr) {
  let answer = arr[0];

  for (let i = 0; i < arr.length; i++) {
    answer = (answer * arr[i]) / gcd(answer, arr[i]);
  }

  return answer;
}

function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}
