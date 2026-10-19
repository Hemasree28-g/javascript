let marks = [35, 72, 48, 90, 65, 28, 81];

let one=marks.filter(function(num){
   return num>50;
});
let result=one.map(function(num){
   return num+5;
});
console.log(result);
