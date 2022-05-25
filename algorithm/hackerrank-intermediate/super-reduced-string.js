// https://www.hackerrank.com/challenges/reduced-string/problem?isFullScreen=true

function superReducedString(s) {
  const regex = /([a-z])\1{1}/g;

  while (regex.test(s)) {
    s = s.replace(regex, '');
  }

  return s || 'Empty String';
}
