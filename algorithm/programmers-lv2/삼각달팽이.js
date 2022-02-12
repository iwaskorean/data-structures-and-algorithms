function solution(n) {
  const arr = Array.from({ length: n }, (_, i) => Array(i + 1).fill(0));
  let x = -1;
  let y = 0;
  let num = 0;
  let pos = n;

  while (pos > 0) {
    for (i = 0; i < pos; i++) {
      arr[++x][y] = ++num;
    }
    pos--;
    for (let i = 0; i < pos; i++) {
      arr[x][++y] = ++num;
    }
    pos--;
    for (let i = 0; i < pos; i++) {
      arr[--x][--y] = ++num;
    }
    pos--;
  }

  return 2;
}

// Hint
// 아래로 내려가면서 값을 채운다(n--)
// 옆으로 가며 값을 채운다(n--)
// 다시 위로 올라가며 값을 채운다(n--)
// n이 0이 되면 종료한다.
