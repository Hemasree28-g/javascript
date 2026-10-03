const b = require("readline");
const b1 = b.createInterface({
    input: process.stdin,
    output: process.stdout
});
function square(num) {
    return num * num;
}
b1.question("Enter num value: ", function(num) {
    num = Number(num);
    let result = square(num);
    console.log(result);
    b1.close();
});