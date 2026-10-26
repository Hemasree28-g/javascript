let car = {
    brand: "Toyota",
    model: "Fortuner",
    year: 2025
};

const u = require("readline");

const c = u.createInterface({
    input: process.stdin,
    output: process.stdout
});

c.question("Enter property to check: ", function(prop) {

    console.log(prop in car);

    c.close();
});