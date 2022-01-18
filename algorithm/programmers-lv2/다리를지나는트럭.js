function solution(bridge_length, weight, truck_weights) {
  const queue = Array.from({ length: bridge_length - 1 }, () => 0);
  let curWeight = truck_weights.shift();
  queue.push(curWeight);
  let answer = 1;

  while (curWeight) {
    curWeight -= queue.shift();

    const cur = truck_weights.shift();

    if (curWeight + cur <= weight) {
      curWeight += cur;
      queue.push(cur);
    } else {
      truck_weights.unshift(cur);
      queue.push(0);
    }

    answer++;
  }

  return answer;
}
