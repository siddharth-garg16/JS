//class and objects(properties and methods)
class Person{
    //constructor method
    constructor(name, age){
        // console.log("Person created");
        this.name = name;
        this.age = age;
    }//constructor function just like every other language

    //normal or prototype method
    sayHi(){
        console.log("Hi");
    }

    //static method
    static hello(){
        console.log("hello");
    }

    //static property
    static type = "Human";
}

let person1 = new Person("Siddharth Garg", 22);
person1.sayHi();
// person1.hello(); --error--no function hello exist--static methods are called using class name and not the object
Person.hello(); //no errors

console.log(person1.type); //undefined
console.log(Person.type); //Human

console.log(person1);

//=========================================================================
//inheritence

//example 1
// class Employee{
//     constructor(){
//         console.log("Employee constructor called");
//     }
// }
// class Manager extends Employee{
    
// }
// let mng1 = new Manager(); //employee constructor will be called
// console.log(mng1); //cpnnected to protoytpe of manager and then employee and then default prototype


//example 2
// class Employee{
//     constructor(nm){
//         this.name = nm;
//     }
// }
// class Manager extends Employee{}
// let mng1 = new Manager("sid"); //no error--it will name as sid
// console.log(mng1);


//example 3
// class Employee{
//     constructor(nm){
//         this.name = nm;
//     }
// }
// class Manager extends Employee{
//     constructor(dpt){
//         this.department = dpt;
//     }
// }
// let mng1 = new Manager("sid", "accounts"); //error here without super
// console.log(mng1);

//example 4
class Employee{
    constructor(nm){
        this.name = nm;
    }
    msg(){
        console.log("Emp msg");
    }
}

class Manager extends Employee{
    constructor(nm, dpt){
        super(nm);
        this.department = dpt;
    }
    msg(){
        console.log('Mng msg');
    }
    info(){
        super.msg(); //superclass msg() will be called
        this.msg(); //its own msg() is called
        console.log(this.name+ " is manager of "+this.department);
    }
}

let mng1 = new Manager("sid", "accounts"); //no error due to super
console.log(mng1);
// mng1.msg(); //no error--inherited method
mng1.info(); //no error
//if we have to call msg() inside info() we'll have to use super--just like name property inside constructor of manager

// we can perform multiple or multilevel inheritence too---do------