// https://programmers.co.kr/learn/courses/30/lessons/42579

function solution(genres, plays) {
  const answer = [];
  const len = genres.length;
  const genresMap = new Map();
  const songsMap = new Map();

  for (let i = 0; i < len; i++) {
    if (genresMap.has(genres[i])) {
      genresMap.set(genres[i], genresMap.get(genres[i]) + plays[i]);
    } else {
      genresMap.set(genres[i], plays[i]);
    }

    songsMap.set(i, [genres[i], plays[i]]);
  }

  const genresArr = [...genresMap];
  const songsArr = [...songsMap];

  genresArr.sort((a, b) => b[1] - a[1]);
  songsArr.sort((a, b) => b[1][1] - a[1][1]);

  for (const [genre] of genresArr) {
    let count = 2;
    for (const [id, [songGenre]] of songsArr) {
      if (!count) {
        break;
      }
      if (genre === songGenre) {
        answer.push(id);
        count--;
      }
    }
  }

  return answer;
}
