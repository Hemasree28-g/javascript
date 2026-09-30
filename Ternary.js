
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your age: ", function(age) {

    age = Number(age);

    let result = age >= 18 ? "Adult" : "Minor";

    console.log(result);

    rl.close();
});
