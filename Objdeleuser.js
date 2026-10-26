let student = {
    name: "Hema",
    age: 19,
    course: "B.Tech",
    city: "Tirupati"
};
const u = require("readline");
const d = u.createInterface({
    input:process.stdin,
    output:process.stdout
});
d.question("enter the property:",function(proname){
    delete student[proname];
    console.log(student);
    d.close();
});
