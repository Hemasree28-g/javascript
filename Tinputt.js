const b = require("readline");

const b1 = b.createInterface({
    input: process.stdin,
    output: process.stdout
});

b1.question("Enter your name: ", function(name) {
    console.log("Your name is: " + name);

    b1.question("Enter your age: ", function(age) {

        age = Number(age);

        console.log("Your age is: " + age);
        console.log("Next year you will be " + (age + 1));

        b1.close();
    });
});