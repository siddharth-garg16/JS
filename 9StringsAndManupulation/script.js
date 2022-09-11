let str1 = "Siddharth";
let greet = `Hello, ${str1}`;
console.log(greet);
// we can escape sequences like c++--- \n \t \\ \" etc....
console.log(str1.length); //length of string
console.log(str1[5]); // 6th character at index 5


let str2 = "Garg";
let fullname = str1+" "+str2; // concatenate
console.log(fullname);

let demo = "Sample";
if("Sample"==demo){
    console.log("Matched");
}else{
    console.log("Not Matched");
}

// predefined string functions----------------
//concat()
let demo1 = "YO";
let demo2 = "BOI";
let final = demo1.concat(" ",demo2); // same as +
console.log(final);

//substr() and substring() and indexOf() and lastIndexOf() and trim()
let heading = "This is JavaScript tutorial.   ";
let substring1 = heading.substring(5, 13); // 5(start index) till 12 (13 was last index) index like range in python ----output - is JavaS
let substring2 = heading.substr(5, 13); // here 5 is starting index and 13 is length from that index ie. it will go to 18 index ---output is is JacaScript
console.log(substring1);
console.log(substring2);
console.log(heading.indexOf("Java")); // first occurence of Java started at index 8
console.log(heading.indexOf("i"));  // check last occurence of substring-- -1 if not found
console.log(heading.trim()); //removes whitespaces at either ends

// toUpperCase() and toLowerCase()
let caps = "CAPSLOCK";
let small = "no capslock"
console.log(caps.toLowerCase());
console.log(small.toUpperCase());

//replace() and include()
let text = "I don't know if it was good enough but it definitely felt good though."
console.log(text.replace("good", "best"));
console.log(text.includes("enough"));