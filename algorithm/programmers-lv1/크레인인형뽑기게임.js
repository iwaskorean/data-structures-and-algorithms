function solution(board, moves) {
  let answer = 0;
  const picked = [];

  for (const pos of moves) {
    for (let i = 0; i < board.length; i++) {
      if (board[i][pos - 1] !== 0) {
        const doll = board[i][pos - 1];
        if (doll === picked[picked.length - 1]) {
          picked.pop();
          answer += 2;
        } else {
          picked.push(doll);
        }
        board[i][pos - 1] = 0;
        break;
      }
    }
  }

  return answer;
}
