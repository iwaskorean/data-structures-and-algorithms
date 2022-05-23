// https://www.hackerrank.com/challenges/two-characters/problem?isFullScreen=true

function alternate(s) {
  const characters = [...new Set(s.split(''))];
  const len = characters.length;
  let answer = 0;

  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      const regex = new RegExp(`[^${characters[i]}|${characters[j]}]`, 'g');
      const cur = s.replace(regex, '');

      if (!/([a-z])\1{1,}/g.test(cur)) {
        answer = Math.max(answer, cur.length);
      }
    }
  }

  return answer;
}
