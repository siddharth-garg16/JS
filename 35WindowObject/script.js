//inner width and height is the red area
//outer width and height includes entire browser window
console.log(window.innerHeight);
console.log(window.innerWidth);
console.log("-----")
console.log(window.outerHeight);
console.log(window.outerWidth);

let url = "https://www.google.com";
let features = "height=500, width=800"; //can check features on MDN
let btn = document.getElementById("btn");
let close = document.getElementById("close");
let win;
btn.addEventListener("click", function(){
    win = window.open(url, "google", features);
})

close.addEventListener("click", function(){
    win.close()
})