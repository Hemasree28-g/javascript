const readline = require("readline");
const b1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const cube = (num) => {
    return num*num*num;
};
b1.question("Enter the number: ",function(num){
    num=Number(num);
    let result=cube(num);
    console.log("cube:",result);
    b1.close();
});