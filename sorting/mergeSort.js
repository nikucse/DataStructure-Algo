function merge(left, right) {
  let results = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] === right[j]) {
      results.push(right[j]);
      j++;
      results.push(left[i]);
      i++;
    } else if (right[j] < left[i]) {
      results.push(right[j]);
      j++;
    } else {
      results.push(left[i]);
      i++;
    }
  }

  while (i < left.length) {
    results.push(left[i]);
    i++;
  }
  while (j < right.length) {
    results.push(right[j]);
    j++;
  }

  return results;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

console.log(mergeSort([1, 10, 50, 2, 14, 50, 99, 100]));
