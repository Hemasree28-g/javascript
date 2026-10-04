function sum(...values){
    let a=0;
    for(let num of values){
        a=a+num;
    }
    return a;
}
console.log(sum(2,4,6,8));