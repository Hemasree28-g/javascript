const readline=require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter a number: ", function(num) {

    num = Number(num);
    let i=1;

    do{
        console.log(i);
        i++;
    }while(i<=num);

    rl.close();
});
