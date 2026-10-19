let numbers = [8, 15, 23, 42, 17, 30];

let one = numbers.find(function(num) {
    return num > 20;
});

let result = numbers.findIndex(function(num) {
    return num > 20;
});

console.log("Value:", one);
console.log("Index:", result);