let btn = document.getElementById("btn2");
btn.addEventListener("click", btnClick); //method 2
//multiple event listener
btn.addEventListener("mouseover", function(){
    console.log("mouseover is activated.");
});

//we can remove event only when we have used addEventListener and haven't specified with anonymous function
btn.removeEventListener("click", btnClick);