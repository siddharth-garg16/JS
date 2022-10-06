// The reduce() method executes a reducer function for array element.
// The reduce() method returns a single value: the function's accumulated result.
// The reduce() method does not execute the function for empty array elements.
// The reduce() method does not change the original array.

let arr = [1, 2, 3, 4, 5];

let sum = arr.reduce((total, val) => total+val, 0);
//0 will be assigned initially to total then the return value (total+val) will be assigned after every call and at the end total will have the sum of all the elements in the array
console.log(sum);