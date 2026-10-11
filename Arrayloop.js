const readline = require("readline");

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

let fruits = [];

rl.question("How many fruits do you want to enter? ", function(count) {
count = Number(count);


function getFruit(i) {
    if (i < count) {
        rl.question("Enter fruit " + (i + 1) + ": ", function(fruit) {
            fruits.push(fruit);
            getFruit(i + 1);
        });
    } else {
        console.log("Your fruits:", fruits);
        console.log("Number of fruits:", fruits.length);
        rl.close();
    }
}

getFruit(0);


});
