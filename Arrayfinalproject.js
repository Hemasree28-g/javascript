let marks = [35, 72, 48, 90, 65, 28, 81];

// 1. Find passing marks
let mm = marks.filter(function(num) {
    return num >= 50;
});

console.log("Passing marks:", mm);

// 2. Add 5 bonus marks
let ya = mm.map(function(num) {
    return num + 5;
});

console.log("Final marks:", ya);

// 3. Find the highest final mark
let uu = ya.reduce(function(a, b) {
    return a > b ? a : b;
}, 0);

console.log("Highest mark:", uu);

// 4. Check whether everyone passed
let gg = ya.every(function(num) {
    return num >= 50;
});

console.log("Everyone passed:", gg);