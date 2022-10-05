let book = ["JS", 753, 1499];

//accessing elements one by one
// let name = book[0];
// let pages = book[1];
// let price = book[2];
// console.log(name);
// console.log(pages);
// console.log(price);

//using array destructuring
let[name, pages, price, publication, printQuality="High"] = book;
console.log(name);
console.log(pages);
console.log(price);
console.log(publication); //undefined
console.log(printQuality); //high -- default value
console.log("------------------");

//we can do it for the nested array too
let person = ['Siddharth', 22, [33, "Random Street", "Random City"], "19STU1013"]
let[s_name, age, [building, street, city], roll] = person;
console.log(s_name);
console.log(age);
console.log(building);
console.log(street);
console.log(city);
console.log(roll);



