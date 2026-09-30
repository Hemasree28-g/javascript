const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter day number: ", function(day) { 
    day = Number(day);
   

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid");
}
rl.close();
});