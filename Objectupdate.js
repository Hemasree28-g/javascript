let employee = {
    name: "Rahul",
    age: 22,
    salary: 25000
};
const o = require("readline");
const u = o.createInterface({
    input : process.stdin,
    output:process.stdout
});

u.question("enter new age:",function(newage){
    newage = Number(newage);
    u.question("enter new salary:",function(newsalary){
            newsalary = Number(newsalary);
        employee.age=newage;
         employee.salary=newsalary;
         console.log(employee);
         u.close();

    });
});