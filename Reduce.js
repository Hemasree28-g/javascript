let numbers = [5, 10, 15, 20];
let result= numbers.reduce(function(a,b){
    return a+b;
},0);
console.log(result);