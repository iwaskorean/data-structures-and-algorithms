// https://www.hackerrank.com/challenges/almost-sorted/problem?isFullScreen=true

function almostSorted(arr) {
  const n = arr.length;

  let i;
  let j;

  for (i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      break;
    }
  }

  for (j = n - 1; j > 0; j--) {
    if (arr[j - 1] > arr[j]) {
      break;
    }
  }

  swap(arr, i, j);

  if (isSorted(arr)) {
    console.log('yes');
    console.log('swap ' + (i + 1) + ' ' + (j + 1));
    return;
  }

  let k = i + 1;
  let l = j - 1;

  while (k < l) {
    swap(arr, k++, l--);
  }

  if (isSorted(arr)) {
    console.log('yes');
    console.log('reverse ' + (i + 1) + ' ' + (j + 1));
    return;
  }

  console.log('no');
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; ++i) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}
