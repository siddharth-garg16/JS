//general function
function sum(a, b){
    console.log(a+b);
}
let a=3;
let b=7;
sum(a, b);

//we can pass another function inside another function
function sayHello(){
    console.log("Hello");
}
function mul(x, y, callback){
    console.log(x*y);
    callback();
}
mul(3, 5, sayHello);
//this is callback function

//---usecase---we can call multiple functions by changing the argument in the function call...we didn't hard code the fucntion call in the definition itself..we used callback instead----useful in ajax and asynchronous functions too
//we can pass anonymous function in the call too--obvious