function solution(cacheSize, cities) {
  let answer = 0;
  const cache = Array.from({ length: cacheSize }, () => 0);

  if (cacheSize === 0) {
    return cities.length * 5;
  }

  for (const city of cities) {
    const cityLow = city.toLowerCase();
    let pos = cache.indexOf(cityLow);

    if (pos === -1) {
      for (let i = cacheSize - 1; i >= 1; i--) {
        cache[i] = cache[i - 1];
      }
      answer += 5;
    } else {
      for (let i = pos; i >= 1; i--) {
        cache[i] = cache[i - 1];
      }
      answer += 1;
    }

    cache[0] = cityLow;
  }

  return answer;
}
