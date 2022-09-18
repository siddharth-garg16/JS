// create multiple objects of same type
//object constructor function

function Student(first, last, age, cur_class){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.class = cur_class
}

var student1 = new Student('Siddharth', 'Garg', 22, 9);
var student2 = new Student('Sid', 'Boi', 23, 10);

student1.nationality = "Indian";
console.log(student1);
console.log(student2);
