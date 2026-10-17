let numbers = [5, 10, 15, 20, 25, 30];

let result = numbers
    .filter(function(num) {
        return num > 15;
    })
    .map(function(num) {
        return num * 2;
    });

console.log(result);