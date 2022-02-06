// https://programmers.co.kr/learn/courses/30/lessons/42885

function solution(people, limit) {
  let answer = 0;

  people.sort((a, b) => b - a);

  let end = people.length - 1;

  for (let st = 0; st <= end; st++) {
    if (people[st] + people[end] <= limit) {
      end--;
    }
    answer++;
  }

  return answer;
}

// Hint: 가장 무거운 사람과 가벼운 사람을 짝지어서 보트에 싣는다.
