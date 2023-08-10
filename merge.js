function merge(arrA, arrB) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < arrA.length && j < arrB.length) {
    if (arrA[i] < arrB[j]) {
      result.push(arrA[i]);
      i++;
    } else if (j < arrB.length) {
      result.push(arrB[j]);
      j++;
    }
    if (
      (i === arrA.length && j < arrB.length) ||
      (j === arrB.length && i < arrA.length)
    )
      break;
  }
  while (i < arrA.length) {
    result.push(arrA[i]);
    i++;
  }
  while (j < arrB.length) {
    result.push(arrB[j]);
    j++;
  }
  return result;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let half = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, half));
  let right = mergeSort(arr.slice(half));
  return merge(left, right);
}

module.exports = { merge, mergeSort };
