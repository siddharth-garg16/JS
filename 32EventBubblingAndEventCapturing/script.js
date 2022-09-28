let div = document.getElementById("mydiv");
let btn = document.getElementById("mybtn");
let body = document.getElementById("mybody")

body.addEventListener("click", function(){
    console.log("Body event");
}, true)

div.addEventListener("click", function(){
    console.log("Div event");
}, true)

btn.addEventListener("click", function(e){
    console.log("Button event");
    e.stopPropagation();
}, true)
//if we select button, by default button then div then body ie.bottom to up--called bubbling--by default false
//if we make useCapture true then we have to apply it to all trigger functions
// we can stop propagation too by using stop propagation
