//-----default parameter---------
function talk(msg="I didn't pass the parameter so I'm default parameter."){
    console.log(msg);
}
talk();
talk("I passed the parameter");

//------------rest parameter------------
function sum(...args){
    total = 0
    for(let i=0; i<args.length; i++){
        total+=args[i];
    }
    return total
}
//args becomes an array
console.log(sum(2, 3));
console.log(sum(2, 3, 5));
console.log(sum(2, 3, 5, 10));
console.log(sum(2, 3, 5, 10, 20, 30, 70));
