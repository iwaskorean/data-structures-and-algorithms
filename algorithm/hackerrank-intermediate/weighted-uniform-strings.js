// https://www.hackerrank.com/challenges/weighted-uniform-string/problem?isFullScreen=true

function weightedUniformStrings(s, queries) {
  const weights = {};
  const answer = [];

  weights[getWeight(s[0])] = 1;
  let count = 1;

  for (let i = 1; i < s.length; i++) {
    count = s[i - 1] === s[i] ? count + 1 : 1;

    weights[getWeight(s[i]) * count] = 1;
  }

  for (const query of queries) {
    answer.push(weights[query] ? 'Yes' : 'No');
  }

  return answer;
}

function getWeight(c) {
  return c.charCodeAt() - 96;
}
