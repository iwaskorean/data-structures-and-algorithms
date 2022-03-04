// https://programmers.co.kr/learn/courses/30/lessons/92342

function solution(n, info) {
  let [answer, max] = [0, 0];
  const len = info.length;
  const lionInfo = Array.from({ length: len }, () => 0);

  function DFS(arr1, arr2, index, count) {
    const apeachBoard = [...arr1];
    const lionBoard = [...arr2];

    if (index < -1 || count > n) {
      return;
    }

    if (count === n || (index === -1 && count)) {
      if (index === -1) {
        lionBoard[len - 1] = n - count;
      }
      const diff = getScoreDiff(apeachBoard, lionBoard);
      if (diff >= max) {
        max = diff;
        answer = lionBoard;
      }
    } else {
      DFS(apeachBoard, lionBoard, index - 1, count);
      lionBoard[index] = apeachBoard[index] + 1;
      DFS(apeachBoard, lionBoard, index - 1, count + apeachBoard[index] + 1);
    }
  }

  DFS(info, lionInfo, len - 1, 0);

  return answer === 0 || max === 0 ? [-1] : answer;
}

function getScoreDiff(arr1, arr2) {
  let [score1, score2] = [0, 0];

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] || arr2[i]) {
      if (arr1[i] - arr2[i] >= 0) {
        score1 += 10 - i;
      } else {
        score2 += 10 - i;
      }
    }
  }

  return score2 - score1;
}

// Hint
// "가장 낮은 점수를 맞힌 개수가 같을 경우 계속해서 그다음으로 낮은 점수를 더 많이 맞힌 경우를 return 해주세요."
