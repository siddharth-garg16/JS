//object

let person = {
    name:"Siddharth Garg",
    age: 21
};
console.log(person);

console.log(person.name); //accessing using dot notation --useful to set value
console.log(person['age']); //using property name itself --useful to get value
console.log(person.height); //--> undefined

person.age = 22; //modified value
console.log(person.age);

person.weight = 80; //added new property
console.log(person);

delete person.weight; //delete the property

//check if it has that property
console.log('height' in person); //returns booleans

//for in loop
for(let key in person){
    console.log(key + " " + ":" + " " + person[key]);
}

//method --any function associated with object is called method

//1st way of making method--anonymous function assigned to sayHello which is assigned to that object
person.sayHello = function(){
    console.log("Hello from sayHello");
}
person.sayHello();

//2nd way --normal function and then assigned to the object
function greetFunc(){
    console.log("Hello from greet");
}
person.greet = greetFunc();

//3rd way --anonymous function inside object
let person2 = {
    name:"Random",
    age: 23,
    sayHello: function(){
        console.log("Hello");
    }
};
person2.sayHello();

//4th way--introduced in ES6
let person3 = {
    name:"Random",
    age: 23,
    sayHello(){
        console.log("Hello");
    }
};
person3.sayHello();