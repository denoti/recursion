// MERGER SORT ALGORITHM AND FUNCTION

function mergeSort ( arr ) {
  if (arr.length > 1) {
    const mid = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, mid);
    const rightHalf = arr.slice(mid);

    mergeSort(leftHalf);
    mergeSort(rightHalf);

    let i = (j = k = 0);

    while (i < leftHalf.length && j < rightHalf.length) {
      if (leftHalf[i] < rightHalf[j]) {
        arr[k] = leftHalf[i];
        i++;
      } else {
        arr[k] = rightHalf[j];
        j++;
      }
      k++;
    }

    while (i < leftHalf.length) {
      arr[k] = leftHalf[i];
      i++;
      k++;
    }

    while (j < rightHalf.length) {
      arr[k] = rightHalf[j];
      j++;
      k++;
    }
  }

  return arr;
}

// Example usage:
const inputArray1 = [3, 2, 1, 13, 8, 5, 0, 1];
const result1 = mergeSort([...inputArray1]);
console.log('Sorted Array 1:', result1);

const inputArray2 = [105, 79, 100, 110];
const result2 = mergeSort([...inputArray2]);
console.log('Sorted Array 2:', result2);
