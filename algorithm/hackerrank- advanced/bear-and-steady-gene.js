// https://www.hackerrank.com/challenges/bear-and-steady-gene/problem?isFullScreen=true

function steadyGene(gene) {
  let answer = Number.MAX_SAFE_INTEGER;
  const len = gene.length;
  const n = len / 4;
  let [lt, rt] = [0, 0];
  const letters = ['A', 'C', 'T', 'G'];
  const map = new Map();

  for (const letter of letters) {
    map.set(letter, 0);
  }

  for (const g of gene) {
    map.set(g, map.get(g) + 1);
  }

  while (rt < len) {
    if (letters.every((letter) => map.get(letter) <= n)) {
      answer = Math.min(answer, rt - lt);
      map.set(gene[lt], map.get(gene[lt]) + 1);
      lt++;
    } else {
      map.set(gene[rt], map.get(gene[rt]) - 1);
      rt++;
    }
  }

  return answer;
}

// Hint
// sliding window
