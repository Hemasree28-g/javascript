const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter first number: ", function(num) {

    num = Number(num);
    let sum = 0;

    for (let i = 1; i <= num; i++) {
        sum = sum + i;
    }

    console.log("Sum:", sum);

    rl.close();
});