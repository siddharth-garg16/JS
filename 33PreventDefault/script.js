let anchor = document.getElementById("google");

anchor.addEventListener("click", function(e){
    console.log("Link clicked");
    e.preventDefault();
})

// can be used in forms if we want to check before submission
