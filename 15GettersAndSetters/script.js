var personA = {
    name:"Sidharth",
    age:22
};
console.log(personA.name.toUpperCase()); // to uppercase
//but we want to implement it in a way that we get the names in uppercase after it is retrieved form the object---helpful when we want to send data with some manipulation

var personB = {
    name:"Sidboi",
    age:22,
    get getUpperName(){
        return this.name.toUpperCase();
    },
    set setName(n){
        this.name = n;
    }
};
console.log(personB.getUpperName); //can be called without ()--like a property and not a method