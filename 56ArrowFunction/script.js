function Normalsum(a, b){
    return a+b;
}

//arrow function
let Arrowsum = (a, b) => {
    return a+b;
}

// let Arrowsum = (a, b) => return a+b; --can be written like this too if there is only one line of code in the function

console.log(Normalsum(3, 9));
console.log(Arrowsum(5, 12));

// ----------------------------------------

//some shortcuts to write arrow function
let double1 = (a) => 2*a; //it is valid only when there is one line of code in the function and that single line is returning something

let double2 = a => 2*a; //it is only valid when there is only one parameter--no parenthesis required

// ----------------------------------------

//when there is no parameter then we write empty parenthesis
let random = () => Math.random();

// ------------------------------------------

//we can do anonymous functions too
// document.addEventListener("click", function(){
//     console.log("anonymous clicked");
// })

document.addEventListener("click", () => console.log("arrow clicked")); //single lined function


