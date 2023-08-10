function insertionSort(arr) {
  if (arr.lenghth <= 1) return arr;
  let sortedIndex = 0;
  let unsorted = 1;
  while (unsorted < arr.length) {
    if (arr[unsorted] < arr[sortedIndex]) {
      //insert here
      for (let i = sortedIndex; i >= 0; i--) {
        if (arr[i + 1] < arr[i]) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
        } else {
          break;
        }
      }
    }
    sortedIndex = unsorted;
    unsorted++;
  }
  return arr;
}

module.exports = insertionSort;
