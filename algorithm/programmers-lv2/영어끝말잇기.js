// https://programmers.co.kr/learn/courses/30/lessons/12981

function solution(n, words) {
  let end = words[0][0];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const st = word[0];

    if (st !== end || words.slice(0, i).includes(word)) {
      return [(i % n) + 1, Math.floor(i / n) + 1];
    }

    end = word[word.length - 1];
  }

  return [0, 0];
}
