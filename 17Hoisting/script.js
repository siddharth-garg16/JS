hello();

function hello(){
    console.log("Hello World");
}

// no issues here unlike other programming languages---JS first read all the content and then executs even if compiler based...this is hoisting


//hoisting in variable---can only do this with var----not let and const
x=7;
console.log(x);
var x; //will o/p 7

//----------------------------------------
console.log(x);
var y;
y = 22; //will o/p undefined in this case

//basically is brings all the definition at the top....
// so case 1 of variable will look like var x; then x=7; and then console.log(x);  ---do----