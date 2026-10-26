let phone = {
    brand: "Samsung",
    model: "Galaxy",
    price: 25000
};
const o = require("readline");
const p = o.createInterface({
    input : process.stdin,
    output : process.stdout
});
p.question("enter property to check",function(prop){
    console.log(phone.hasOwnProperty(propertyName));
});