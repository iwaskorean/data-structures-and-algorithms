// https://programmers.co.kr/learn/courses/30/lessons/72411

function getCombination(arr, r) {
  const result = [];

  if (r === 1) {
    return arr.map((value) => [value]);
  }

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombination(rest, r - 1);
    const attached = combinations.map((combi) => [fixed, ...combi].join(''));

    result.push(...attached);
  });

  return result;
}

function solution(orders, course) {
  const ordersArr = orders.map((order) => order.split('').sort());

  const answer = [];

  for (const menuCounts of course) {
    const map = new Map();
    let max = 2;

    for (const order of ordersArr) {
      const combinations = getCombination(order, menuCounts);

      for (const combi of combinations) {
        if (map.has(combi)) {
          map.set(combi, map.get(combi) + 1);
          max = Math.max(max, map.get(combi));
        } else {
          map.set(combi, 1);
        }
      }
    }

    for (const [key, value] of map) {
      if (value >= max) {
        answer.push(key);
      }
    }
  }

  return answer.sort();
}
