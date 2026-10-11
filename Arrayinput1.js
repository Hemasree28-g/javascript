const readline = require("readline");

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

let fruits = [];

rl.question("Enter first fruit: ", function(fruit1) {
fruits.push(fruit1);


rl.question("Enter second fruit: ", function(fruit2) {
    fruits.push(fruit2);

    rl.question("Enter third fruit: ", function(fruit3) {
        fruits.push(fruit3);

        console.log("Your fruits:", fruits);
        console.log("Number of fruits:", fruits.length);
fruits.pop();
        console.log("Number of fruits:", fruits.length);
        rl.close();
    });
});


});
