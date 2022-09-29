let timeOutID = setTimeout(myFunc, 10000);
function myFunc(){
    alert("10 seconds have passed.");
}
// event happens after some time-- it returns an ID which can be used to handle particular situations
// clearTimeout(timeOutID); --won't execute--used with if statements

//setInterval keeps repeating after some interval
let setIntervalID = setInterval(fun, 2000);
function fun(){
    console.log("Interval repeated");
}
let btn = document.getElementById("btn");
btn.addEventListener("click", function(){
    clearInterval(setIntervalID);
})