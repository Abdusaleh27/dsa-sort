/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr) {
  let currentPivot = 0;
  const swap = (arr1, arr2) => {
    let temp = arr1;
    arr1 = arr2;
    arr2 = temp;
  };
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[currentPivot] && i - currentPivot === 1) {
      // swapping adjacents only
      let temp = arr[currentPivot];
      arr[currentPivot] = arr[i];
      arr[i] = temp;
      currentPivot++;
    } else if (arr[i] < arr[currentPivot]) {
      //1. swap arr[i] with adjacent of pivot
      let temp = arr[currentPivot + 1];
      arr[currentPivot + 1] = arr[i];
      arr[i] = temp;

      //2. swap pivot with adjacent
      temp = arr[currentPivot];
      arr[currentPivot] = arr[currentPivot + 1];
      arr[currentPivot + 1] = temp;
      currentPivot++;
    }
  }

  return currentPivot;
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr) {
  let pivotPoint = pivot(arr);
  let left = arr.slice(0, pivotPoint).sort((a, b) => a - b);
  let right = arr.slice(pivotPoint).sort((a, b) => a - b);
  return left.concat(right);
}

module.exports = { quickSort, pivot };
