function solution(s) {
  const table = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  const keys = Object.keys(table);

  for (const key of keys) {
    if (s.includes(key)) {
      const regExp = new RegExp(key, 'g');
      s = s.replace(regExp, table[key]);
    }
  }

  return s * 1;
}

const s = 'one4seveneight';
