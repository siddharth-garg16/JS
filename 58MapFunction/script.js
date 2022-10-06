//helps to perform operation on each element of an array and store it in new array

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]



//normal way of doing things
// let sqr = [];
// for(let i=0; i<arr.length; i++){
//     sqr[i] = arr[i]*arr[i];
// }
// console.log(sqr);


//using map
let sqr = arr.map(function(val){
    return val*val;
});
console.log(sqr);

//can use arrow function too
let cube = arr.map((val) => val*val*val);
console.log(cube);


