// https://www.hackerrank.com/challenges/largest-permutation/problem?isFullScreen=true

function largestPermutation(k, arr) {
  const n = arr.length;
  const map = new Map();
  let index = 0;
  let max = Math.max(...arr);

  for (let i = 0; i < n; i++) {
    map.set(arr[i], i);
  }

  let i = 0;
  while (i < n && i < k && max) {
    if (arr[index] !== max) {
      const maxIndex = map.get(max);
      map.set(arr[index], maxIndex);
      map.set(max, index);
      arr[maxIndex] = arr[index];
      arr[index] = max;
      i++;
    }

    index++;
    max--;
  }

  return arr;
}

// Hint
// permutation of the first N natural numbers
