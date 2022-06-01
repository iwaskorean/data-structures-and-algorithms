// https://www.hackerrank.com/challenges/chief-hopper/problem?isFullScreen=true

function chiefHopper(arr) {
  let answer = 0;

  for (let i = arr.length - 1; i >= 0; i--) {
    answer = Math.ceil((arr[i] + answer) / 2);
  }

  return answer;
}

// Hint
// e=(e + h)/2 or (e + h)/2 + 1 depending on the value of e + h
// -> Math.ceil((e + h) / 2)
