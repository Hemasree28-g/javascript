
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter score: ", function(score) {

    score = Number(score);

    console.log(score += 10);

    rl.close();
});

