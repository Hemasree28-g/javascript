let numbers = [5, 12, 8, 21, 30, 7, 16];

let one=numbers.filter(function(num){
   return num%2==0;
});
let result=one.map(function(num){
   return num*3;
});
console.log(result);
