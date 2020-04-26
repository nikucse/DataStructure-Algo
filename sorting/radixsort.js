function getDigit(num, place) {
  return Math.floor((Math.abs(num) / Math.pow(10, place)) % 10);
}

function digitCount(num) {
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++)
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));

  return maxDigits;
}

function radixSort(nums) {
  for (let k = 0; k < mostDigits(nums); k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []); // give array of arrays
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      console.log(digit);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

console.log(radixSort([5634, 7373, 899, 0, 99, 67, 3]));
