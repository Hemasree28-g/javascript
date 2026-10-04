const readline = require("readline");

const b1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let name;

b1.question("Enter your name: ", function(input) {

    name = input;

    let age = 19;

    console.log("Inside function:");
    console.log(name);
    console.log(age);

    console.log("Outside function:");
    console.log(name);
    console.log(age); // This will cause an error

    b1.close();
});