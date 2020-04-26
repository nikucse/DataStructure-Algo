function square(arr) {
  let squareArr = [];
  function helper(input) {
    if (input.length == 0) return;
    else {
      squareArr.push(input[0] * input[0]);
    }
    helper(input.slice(1));
  }
  helper(arr);
  return squareArr;
}
let squareArr = square([2, 3, 4, 5, 6, 7, 8, 9]);
console.log("--[2,3,4,5,6,7,8,9]> Square ---------->");
console.log(squareArr);
