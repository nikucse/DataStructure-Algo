console.log("--------------- Count Down -----------");
function countDown(num){
  if(num <= 0){
    console.log("All Done!");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

countDown(5);

console.log("--------------- Sum Range-----------");

function sumRange(num){
  if(num == 1)
    return 1;
  return num + sumRange(num-1);
}

console.log(`sumRange(5)  ===> ${sumRange(5)}`);


console.log("--------------- Factorial-----------");

function factorial(num){
  if(num == 1)
    return 1;
  return num * factorial(num-1);
}
console.log(`5!  ===> ${factorial(5)}`);
