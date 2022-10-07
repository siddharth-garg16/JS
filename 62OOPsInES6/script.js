//prototype and prototypal inheritence
let person1 = {};
console.log(person1);

let person2 = {
    name:"Siddharth"
}
console.log(person2);
//JS attach Prototype to this objects---basically connect with the object--JS own prototype
//it will add prototype to the object created by the constructor fucntion too but it will one extra prototype attached to it--first one is our own person prototype and second one is JS inbuilt protoype


console.log(person2.hasOwnProperty('name'));
console.log(person2.hasOwnProperty('age'));
//in built function by JS provided due to prototype