const readline = require("readline");
const b1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const square = (num) => {
    return num * num;
};

b1.question("Enter a number: ", function(num) {
    num = Number(num);

    let result = square(num);

    console.log("Square:", result);

    b1.close();
});