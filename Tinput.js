const a = require("readline");

const a1 = a.createInterface({
    input: process.stdin,
    output: process.stdout
});

a1.question("Enter your name: ", function(name) {
    console.log("Hello " + name);
    console.log("Welcome " + name);

    a1.close();
});