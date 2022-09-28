// window.addEventListener("scroll", function(){
//     console.log("Scrolled");
// })  -------capture scrolling

//to capture horizontal and vertical scrolling
window.addEventListener("wheel", function(e){
    if(e.deltaY < 0){
        console.log("Scrolling up");
    }else if(e.deltaY > 0){
        console.log("Scrolling down");
    }
})
//we can use deltaX for horizontal scrolling

//to check how many pixels have been scrolled--used to push some pop ups by sites
window.addEventListener("scroll", function(){
    if(window.pageYOffset > 500){
        document.body.style.background = "red";
    }
})
//after 500px color will be red