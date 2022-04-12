// https://programmers.co.kr/learn/courses/30/lessons/64064

function solution(user_id, banned_id) {
  const [bannedIdLen, userIdLen] = [banned_id.length, user_id.length];
  const cases = Array.from({ length: bannedIdLen }, () => []);
  const ch = Array.from({ length: userIdLen }, () => 0);
  const results = new Set();

  for (let i = 0; i < userIdLen; i++) {
    for (let j = 0; j < bannedIdLen; j++) {
      if (isBanned(banned_id[j], user_id[i])) {
        cases[j].push(i);
      }
    }
  }

  function DFS(level, arr) {
    if (level === bannedIdLen) {
      arr.sort((a, b) => a - b);
      results.add(arr.join());
    } else {
      for (let i = 0; i < cases[level].length; i++) {
        if (!ch[cases[level][i]]) {
          ch[cases[level][i]] = 1;
          DFS(level + 1, [...arr, cases[level][i]]);
          ch[cases[level][i]] = 0;
        }
      }
    }
  }

  DFS(0, []);

  return results.size;
}

function isBanned(bannedId, userId) {
  if (bannedId.length !== userId.length) {
    return false;
  }
  for (let i = 0; i < bannedId.length; i++) {
    if (bannedId[i] !== '*' && bannedId[i] !== userId[i]) {
      return false;
    }
  }

  return true;
}
