// https://www.hackerrank.com/challenges/strong-password/problem?isFullScreen=true

function minimumNumber(n, password) {
  const minLen = 6;
  const regexes = [/[0-9]/, /[a-z]/, /[A-Z]/, /[!@#$%^&*()\-+]/];
  const require = regexes.filter((regex) => !regex.test(password)).length;

  return Math.max(require, minLen - n);
}
