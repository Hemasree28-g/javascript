let numbers = [3, 8, 12, 17, 20, 25];

let filtered=numbers.filter(function(num){
    return num>10;
});
let result=filtered.map(function(num){
    return num*2;
});
console.log(result);