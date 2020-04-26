function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr);
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i !== min) swap(arr, i, min);
  }

  return arr;
}

swap = (arr, i, min) => {
  let temp = arr[i];
  arr[i] = arr[min];
  arr[min] = temp;
};

let arr = [34, 22, 10, 19, 17];

console.log(selectionSort(arr));
