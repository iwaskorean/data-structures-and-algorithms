function solution(m, musicinfos) {
  const infos = musicinfos.map((info) => {
    const [start, end, title, key] = info.split(',');

    const playTime =
      60 * (end.slice(0, 2) - start.slice(0, 2)) +
      (end.slice(3, 5) - start.slice(3, 5));

    const keyArr = key.match(/[A-Z]#?/g);
    let melody = key.repeat(Math.floor(playTime / keyArr.length));
    melody += keyArr.slice(0, playTime % keyArr.length).join('');

    return [playTime, title, melody];
  });

  const answer = infos.filter((info) => {
    const melody = info[2];
    let i = melody.indexOf(m);

    if (i === -1) {
      return false;
    }
    while (i !== -1) {
      if (melody[i + m.length] !== '#') {
        return true;
      }
      i = melody.indexOf(m, i + 1);
    }
  });

  if (answer.length === 0) {
    return '(None)';
  }

  answer.sort((a, b) => (a[0] === b[0] ? 0 : b[0] - a[0]));

  return answer[0][1];
}

/**
 * 참고한 부분(16라인 answer 배열 구하기)
 * melody의 m 뒤에 #이 있으면 정답이 아니다.
 * 따라서 i를 증가시켜서 처음 찾은 m 뒷 부분에 m이랑 일치하는 문자를 찾아야한다.
 */
