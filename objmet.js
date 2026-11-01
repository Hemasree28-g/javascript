const readline = require("readline");

const u = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

u.question("Enter first number: ", function(num1) {
    num1 = Number(num1);

    u.question("Enter second number: ", function(num2) {
        num2 = Number(num2);

        let calculator = {
            num1: num1,
            num2: num2,

            add: function() {
                console.log(calculator.num1 + calculator.num2);
            }
        };

        calculator.add();

        u.close();
    });
});