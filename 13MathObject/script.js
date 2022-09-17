console.log(Math.PI); //pi
console.log(Math.E); //eulers number

let x = 4.7;
console.log(Math.floor(x));
console.log(Math.ceil(x));
console.log(Math.round(x));
console.log(Math.trunc(x));
console.log(Math.pow(2, 3));
console.log(Math.sqrt(100));
console.log(Math.min(100, -3, 22, 30, 23, -99, 0));
console.log(Math.max(100, -3, 22, 30, 23, -99, 0));

let rand1 = Math.random(); // between 0 and 1 exclusive
let rand2 = Math.floor(Math.random()*10); //between 0-9 inclusive
let rand3 = Math.floor(Math.random()*11); //between 0-10 inclusive
let rand4 = Math.floor(Math.random()*100); //between 0-99 inclusive
// can multily with (max-min) to get the random in range
console.log(rand1);
