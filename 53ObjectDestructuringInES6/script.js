let book ={
    name:"JS",
    pages:753,
    price:1499
}
// console.log(book.name);
// console.log(book.pages);
// console.log(book.price);

let{name:title, pages, price, quality="High"} = book; //has to be same name else use column and then the new name like title
console.log(title);
console.log(pages);
console.log(price);
console.log(quality);
//we can set default values too like quality

// we can do nested destructuring too just like arrays
