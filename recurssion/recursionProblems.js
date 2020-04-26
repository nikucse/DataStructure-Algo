
// power(2,0) -> 1
// power(2,4) -> 16
// power(2,5) -> 32
function power(base,expo){
  if(expo === 0)
    return 1;
  return base * power(base,expo - 1);
}
console.log("Power => "+power(3,3));

// Factorial
function factorial(num){
  if(num == 0)
  return 1;
  else if (num === 1)
  return 1;
  return num * factorial(num-1);
}
console.log("Factorial => "+factorial(5));

// Product of Array

function productOfArray(arr){
  if(arr.length === 0)
    return 1;

  return arr[0] * productOfArray(arr.slice(1));
}

console.log("Product of Array => "+productOfArray([1,2,3,10]));
