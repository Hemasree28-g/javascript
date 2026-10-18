let numbers = [5, 10, 15, 20, 25, 30];

let filtered = numbers.filter(function(num) {
    return num > 10;
});

let result = filtered.map(function(num) {
    return num + 5;
});

console.log(result);