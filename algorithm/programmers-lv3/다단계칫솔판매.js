// https://programmers.co.kr/learn/courses/30/lessons/77486

function solution(enroll, referral, seller, amount) {
  const org = {};
  const benefit = {};
  const price = 100;

  for (let i = 0; i < enroll.length; i++) {
    org[enroll[i]] = referral[i] === '-' ? null : referral[i];
    benefit[enroll[i]] = 0;
  }

  function distributeBenefit(person, amount) {
    const commission = Math.floor(amount * 0.1);

    benefit[person] += amount - commission;

    if (org[person] && commission) {
      distributeBenefit(org[person], commission);
    }
  }

  for (let i = 0; i < seller.length; i++) {
    distributeBenefit(seller[i], amount[i] * price);
  }

  return Object.values(benefit);
}

// Hint for TC 11 ~ 13
// 배분금이 0원인 경우 시간초과
