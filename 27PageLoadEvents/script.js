// when a page loads two things get triggered - (i) DOMContentLoaded(HTML loaded and DOM tree is made but o external resources like CSS and images. Now you can start selecting DOM nodes and initialize interface.)-------(ii) load(HTML and external resources are loaded)

window.addEventListener("DOMContentLoaded", function(){
    console.log("DOM tree created");
})

window.addEventListener("load", function(){
    console.log("Fully loaded");
})



// we can use load for some specific elements too
let img = document.getElementById("img");
window.addEventListener("load", function(){
    console.log("Image loaded");
})