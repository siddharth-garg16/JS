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
//look for prototype chaining in diagrams--used in inheritence


//---------------------------------------------------------------------------

function Person(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    this.fullName = function(){
        console.log(this.firstName+" "+this.lastName);
    }
}

let person3 = new Person("Siddharth", "Garg", 22);
console.log(person3);
let person4 = new Person("XYZ", "ABC", 25);
console.log(person4);
//we will notice that when objects person3 and person4 are printed they both have fullName function in them...it is violating the DRY...because method is same for every Person object so why do we have it in each object...we must put it in prototype so it is not present in every object but only in prototype and that prototype is then attached to each object so we don't have to repeat it...prototype acts as a single source for every person object....DRY maintained(refer diagrams)
//using prototype for methods(below)
function PersonS(firstName, lastName, age, sex){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.sex = sex
}
PersonS.prototype.fullName = function(){
    console.log(this.firstName+" "+this.lastName);
}
let person5 = new PersonS("Unknown", "Unknown", 33, "M");
console.log(person5);
//you can see the change in expansion of person3,4 and person 5---it will how the chaining will work to search and execute the method fullname....difference in ss in diagrams

