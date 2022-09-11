// can store different datatypes like lists in python--multidimensional too
// let books = []; empty array

// let books = ["Maths", "Physics"];
// console.log(books);
// console.log(typeof books);
 


// let books = new Array(); //empty array

// let books = new Array("Maths", "Physics");
// console.log(books);
// console.log(typeof books);
// console.log(books[1]);


// ------------------------------------------operations on array-----------------------
let subjects = ["DSA", "CN", "DBMS", "OS"];
console.log(subjects.length); //elements in array
console.log(subjects);
console.log(Array.isArray(subjects)); //tells if it is array..typeof returns object as it object of array class

//push() add element at the end
subjects.push("SE");
console.log(subjects);

//unshift() add element at the start
subjects.unshift("Compiler");
console.log(subjects);

//pop() remove element from the end
subjects.pop();
console.log(subjects);

//shift() removes element from the start
subjects.shift();
console.log(subjects);

//splice() removes element from certain index and upto how much
subjects.splice(1, 2); //removes CN and DBMS
console.log(subjects);

// empting the entire array
// subjects = []; first method
// subjects.length = 0;
// console.log(subjects); --> []

// indexOf() find the first occurence of the element(index) else -1
console.log(subjects.indexOf("OS")); 

// split()
let text = "This is written in JS";
let wordarr = text.split("X");
console.log(wordarr);

// join()
let words = ["hello", "there"];
let sentence = words.join("X");
console.log(sentence);

// concat()
let arr1 = ["random1", "random2"];
let arr2 = ["randomX", "randomY"];
console.log(arr1.concat(arr2));

//-------------------looping through array---------------------
let myarr = ["element1", "element2", "element3", "element4"];

// normal for
for(let i=0; i<myarr.length; i++){
    console.log(`Element ${i} is ${myarr[i]}`);
}

//foreach (it is a function)
myarr.forEach(myfunc);
function myfunc(value){
    console.log(value);
}


