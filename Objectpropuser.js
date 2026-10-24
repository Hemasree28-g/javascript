let mobile = {
    brand: "Samsung",
    model: "Galaxy"
};
const p = require("readline");
const u =p.createInterface({
    input:process.stdin,
    output:process.stdout
});
u.question("enter price:",function(price){
    price=Number(price);
    u.question("enter color:",function(color){
        mobile.price;
        mobile.color;
        console.log(mobile);
         u.close();
    });
});
