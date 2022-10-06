//used to filter elements of an array on some conditions
let arr = [1, 22, 3, 4, 56, 65, 72, 81, 9];

let greater_than_10 = arr.filter(val => val>10);
console.log(greater_than_10);



let team = [
    {
        name:"Siddharth",
        position:"Developer"
    },
    {
        name:"ABC",
        position:"Developer"
    },
    {
        name:"XYZ",
        position:"Designer"
    },
    {
        name:"PQR",
        position:"Developer"
    },
    {
        name:"MNO",
        position:"Server Engineer"
    }
]

let devs = team.filter(val => val.position=="Developer");
console.log(devs);