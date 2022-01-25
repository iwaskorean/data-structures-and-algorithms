function solution(str1, str2) {
  const sub1 = getSubset(str1);
  const sub2 = getSubset(str2);
  const merge = new Set([...sub1, ...sub2]);
  const CONSTANT_NUM = 65536;
  let inter = 0;
  let union = 0;

  if (merge.size === 0) {
    return CONSTANT_NUM;
  }

  for (const target of merge) {
    const c1 = sub1.filter((el) => el === target).length;
    const c2 = sub2.filter((el) => el === target).length;
    inter += Math.min(c1, c2);
    union += Math.max(c1, c2);
  }

  return Math.floor((inter / union) * CONSTANT_NUM);
}

function getSubset(str) {
  const res = [];
  const lowStr = str.toLowerCase();

  for (let i = 0; i < lowStr.length - 1; i++) {
    const cur = lowStr.substr(i, 2);

    if (
      cur[0].charCodeAt() < 96 ||
      cur[0].charCodeAt() > 123 ||
      cur[1].charCodeAt() < 96 ||
      cur[1].charCodeAt() > 123
    ) {
      continue;
    }

    res.push(cur);
  }

  return res;
}
