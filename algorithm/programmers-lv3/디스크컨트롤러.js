// https://programmers.co.kr/learn/courses/30/lessons/42627

function solution(jobs) {
  let [answer, time, i] = [0, 0, 0];
  const pq = [];

  jobs.sort((a, b) => a[0] - b[0]);

  while (i < jobs.length || pq.length) {
    while (i < jobs.length && time >= jobs[i][0]) {
      pq.push(jobs[i]);
      i++;
    }

    if (pq.length) {
      pq.sort((a, b) => a[1] - b[1]);
      const [wait, work] = pq.shift();
      time += work;
      answer += time - wait;
    } else {
      time = jobs[i][0];
    }
  }

  return Math.floor(answer / jobs.length);
}

// Hint 우선순위 큐
// 1. jobs를 작업 요청 시간 기준 오름차순 정렬한다.
// 2. 처음 수행하는 작업의 작업 완료 시간 이전의 요청이 들어온 다른 작업들을 우선순위 큐에 넣는다.
// 3. 우선순위 큐의 작업들을 작업 소요 시간이 작은 순서대로 실행한다.
// 4. 우선순위 큐가 빈 상태가 되면 다시 jobs의 작업을 수행한다.
// 5. 2~4 과정 반복
