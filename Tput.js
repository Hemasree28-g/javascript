const b = require("readline");

const b1 = b.createInterface({
    input: process.stdin,
    output: process.stdout
});

b1.question("Enter your name: ", function(name) {
    console.log("Your name is: " + name);

    b1.question("Enter your age: ", function(age) {
        console.log("Your age is: " + age);

        b1.close();
    });
});