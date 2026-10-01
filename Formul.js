const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", function(num) {

    num = Number(num);

    for (let i = 1; i <= 10; i++) {
        console.log(num + " * " + i + " = " + (num * i));
    }

    rl.close();
});