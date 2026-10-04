const readline = require("readline");
const b1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

const isEven=(num)=>{
    if(num%2===0)
    {
        return true;
    }
    else
    {
        return false;
    }
};

b1.question("Enter a number: ",function(num){
    num=Number(num);
    let result=isEven(num);
    console.log(result);
    b1.close();
});