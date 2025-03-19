//Union of Two Sorted Arrays

const unionArray = (a, b) => {
  const answer = [];
  let i = 0,
    j = 0;
  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      answer.push(a[i]);
      i++;
    } else if (b[j] < a[i]) {
      answer.push(b[j]);
      j++;
    } else {
      answer.push(a[i]);
      i++;
      j++;
    }
    while (answer.at(-1) === a[i]) {
      i++;
    }
    while (answer.at(-1) === b[j]) {
      j++;
    }
  }
  while (i < a.length) {
    if (answer.at(-1) !== a[i]) {
      answer.push(a[i]);
      i++;
    }
  }
  while (j < b.length) {
    if (answer.at(-1) !== b[j]) {
      answer.push(b[j]);
      j++;
    }
  }
  return answer;
};

const arr1 = [1, 1, 2],
  arr2 = [2, 2, 3];

const answer = unionArray(arr1, arr2);

console.log(answer);
