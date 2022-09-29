//used to get information of the current page URL or redirecting etc...
// useful for URLs...
console.log(location.href);
console.log(location.pathname);
console.log(location.protocol);
//can use multiple properties--can be used to set as well to redirect

//redirect
function fun(){
    // window.location = "https://www.google.com"; --method1
    // location.href = "https://www.google.com"; --method2
    location.assign("https://www.google.com"); //--method3
}

location.replace("https://www.google.com"); //no back button to go to previous page
location.reload(); //reload page


