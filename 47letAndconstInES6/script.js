//-----------global object property and methods---------------
var x = 10;
let y = 20;

console.log(window.x); //prints 10 because var makes variables and functions a property or methods of global object
console.log(window.y); //prints undefined--doesn't make global property or method
// var a;
// let b;
// console.log(a);
// console.log(b); both prints undefined

//-----------redeclaration-----------------
var count = 1;
var count;
console.log(count);// no issues with var with this

// let c = 4;
// let c;
// console.log(c); //error of declaration that c has already been declared



// const for const variable that can't be changed due to some use case