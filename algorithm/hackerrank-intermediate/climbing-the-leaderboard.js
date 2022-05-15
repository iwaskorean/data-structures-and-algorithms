// https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem?isFullScreen=true

function climbingLeaderboard(ranked, player) {
  const answer = [];
  const rankedArr = [...new Set(ranked)];
  let st = rankedArr.length - 1;

  for (let i = 0; i < player.length; i++) {
    let rank = 0;

    for (let j = st; j >= 0; j--) {
      if (player[i] < rankedArr[j]) {
        rank = j + 2;
        st = j;
        break;
      }
    }

    answer.push(!rank ? 1 : rank);
  }

  return answer;
}
