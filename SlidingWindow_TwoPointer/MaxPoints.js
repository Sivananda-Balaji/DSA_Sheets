//Maximum Points You Can Obtain from Cards

function maxScore(cardScore, k) {
  //your code goes here
  let max = 0;
  for (let i = 0; i < k; i++) {
    max += cardScore[i];
  }

  let lastVal = cardScore.length - 1;
  let kVal = k - 1;
  let curr = max;
  for (let i = 0; i < k; i++) {
    curr += cardScore[lastVal] - cardScore[kVal];
    max = Math.max(curr, max);
    lastVal--;
    kVal--;
  }
  return max;
}

const cardScore = [5, 4, 1, 8, 7, 1, 3],
  k = 3;

const result = maxScore(cardScore, k);

console.log(result);
