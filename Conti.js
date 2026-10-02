const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", function(num) {

    num = Number(num);
    for(let i=1;i<=num;i++){
        if(i===6){
            continue;
        }
        console.log(i);

    }

    rl.close();
});