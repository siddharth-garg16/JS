//window object represents a window in browser.
//an object of window is created automatically in the browser.
//all global variables, functions and objects made globally using var becomes memebers of window object.
//global variables are properties of window object.
//global functions are methods of window object.
var x = "hello";
console.log(x);
console.log(window.x);
//only using var

function xyz(){
    console.log("hi");
}
xyz();
window.xyz();