function calculate(callback){
    callback(5,4);
}
function multiply(a,b){
    console.log(a*b);
}
calculate(multiply);