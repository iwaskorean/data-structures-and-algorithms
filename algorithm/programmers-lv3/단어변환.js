// https://programmers.co.kr/learn/courses/30/lessons/43163

function solution(begin, target, words) {
  if (!words.includes(target)) {
    return 0;
  }

  const ch = Array.from({ length: words.length }, () => 0);

  const queue = [];
  queue.push(begin);

  let count = 0;

  while (queue.length) {
    const len = queue.length;
    const indexs = Array.from({ length: target.length }, () => 0);

    for (let i = 0; i < len; i++) {
      const word = queue.shift();

      for (let j = 0; j < word.length; j++) {
        if (indexs[j] === 0) {
          for (let k = 0; k < words.length; k++) {
            if (
              ch[k] === 0 &&
              spliceWord(word, j) === spliceWord(words[k], j)
            ) {
              ch[k] = 1;
              indexs[j] = 1;
              queue.push(words[k]);
            }
          }
        }
      }
    }

    count++;

    if (queue.includes(target)) {
      return count;
    }
  }
}

function spliceWord(word, index) {
  const arr = word.split('');
  arr.splice(index, 1);
  return arr.join('');
}
