//... works as rest parameter or spread operator
//if in parameter then rest parameter else spread operator

let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5, 6, 7, 8, 9, ...arr1];

console.log(arr2);