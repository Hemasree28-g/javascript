function square(num){
    console.log(num*num);
}
function run(callback){
    callback(6);
}
run(square);