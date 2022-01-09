function solution(record) {
  const answer = [];
  const arr = record.map((el) => el.split(' '));
  const map = new Map();

  for (const [cmd, uid, name] of arr) {
    if (cmd !== 'Leave') {
      map.set(uid, name);
    }
  }

  for (const [cmd, uid] of arr) {
    if (cmd === 'Enter') {
      answer.push(`${map.get(uid)}님이 들어왔습니다.`);
    }
    if (cmd === 'Leave') {
      answer.push(`${map.get(uid)}님이 나갔습니다.`);
    }
  }

  return answer;
}
