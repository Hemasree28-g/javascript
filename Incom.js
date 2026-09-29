
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter age: ", function(age) {

    age = Number(age);
    if(age>=18){
        console.log(true);
    }
    rl.close();
});