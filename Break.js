const readline=require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter a number: ", function(num) {

    num = Number(num);
    let i = 1;

while (i <= num) {

    if (i === 5) {
        break;
    }

    console.log(i);
    i++;
}
    rl.close();
});
