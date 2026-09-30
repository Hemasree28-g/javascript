const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter first number: ", function(first) {

    rl.question("Enter second number: ", function(second) {

        rl.question("Enter choice (1-4): ", function(choice) {

            first = Number(first);
            second = Number(second);
            choice = Number(choice);

            switch (choice) {
                case 1:
                    console.log("Addition:", first + second);
                    break;

                case 2:
                    console.log("Subtraction:", first - second);
                    break;

                case 3:
                    console.log("Multiplication:", first * second);
                    break;

                case 4:
                    console.log("Division:", first / second);
                    break;

                default:
                    console.log("Invalid choice");
            }

            rl.close();
        });
    });
});