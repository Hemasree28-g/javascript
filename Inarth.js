const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter first number: ", function(first) {

    rl.question("Enter second number: ", function(second) {

        first = Number(first);
        second = Number(second);

        console.log("Addition:", first + second);
        console.log("Subtraction:", first - second);
        console.log("Multiplication:", first * second);
        console.log("Division:", first / second);
        console.log("Remainder:", first % second);
        console.log("Power:", first ** second);

        rl.close();
    });
});