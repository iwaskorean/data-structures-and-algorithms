// https://programmers.co.kr/learn/courses/30/lessons/60059

function solution(key, lock) {
  const [n, m] = [lock.length, key.length];
  const len = n + m * 2 - 2;
  const arr = Array.from({ length: len }, () => Array(len).fill(0));
  let rKey = [...key];

  function isValid(arr) {
    for (let i = m - 1; i <= len - m; i++) {
      for (let j = m - 1; j <= len - m; j++) {
        if (arr[i][j] !== 1) {
          return false;
        }
      }
    }
    return true;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      arr[i + m - 1][j + m - 1] = lock[i][j];
    }
  }

  for (let i = 0; i < n + m - 1; i++) {
    for (let j = 0; j < n + m - 1; j++) {
      for (let rt = 0; rt < 4; rt++) {
        const cur = arr.map((el) => [...el]);
        rKey = rotate(rKey);

        for (let ki = 0; ki < m; ki++) {
          for (let kj = 0; kj < m; kj++) {
            cur[i + ki][j + kj] = cur[i + ki][j + kj] + rKey[ki][kj];
          }
        }

        if (isValid(cur)) {
          return true;
        }
      }
    }
  }

  return false;
}

function rotate(arr) {
  const len = arr.length;
  const result = Array.from({ length: len }, () => Array(len).fill(0));
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      result[j][len - i - 1] = arr[i][j];
    }
  }
  return result;
}

// Hint
// key가 이동할 수 있는 최대 범위 만큼 lock을 확장 후 한칸씩 이동 + key를 돌려가며 lock 체크
