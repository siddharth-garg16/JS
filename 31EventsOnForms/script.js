let input  = document.getElementById("myinput");
input.addEventListener("focus", myFocus);
input.addEventListener("blur", myBlur);
// input.addEventListener("change", function(){
//     console.log(this.value);
// }); --change was triggered when we went to blur

input.addEventListener("input", function(){
    console.log(this.value);
}); //input triggers when in focus


function myFocus(){
     input.style.background = "blue";
     input.style.color = "white";
}

function myBlur(){
    input.style.background = "white";
}

