//OOPs before ES6
let person1 = {
    firstName:"Sid",
    lastName:"G",
    age:18,
    fullName:function(){
        console.log(this.firstName + " " + this.lastName);
    }
};
person1.age = 22;
console.log(person1.firstName);
person1.fullName();
//similar to what we studied in 12Objects.

//but we can  also use new Object() too---not discussed in 12Objects
let person2 = new Object();
// we have to copy and paste the code repeatdly for each object that we create--violating the principle of DRY
// we had constructor function instead of pure classes here to maintain DRY
function Person(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}
let person3 = new Person("Sidboi", "G", 22);
console.log(person3);
