let uploadbtn = document.getElementById("btn");
// uploadbtn.style.cssText = "background-color: red; color: white;"; --method1
// uploadbtn.setAttribute("style", "background-color: red; color: white;"); --method2
//above methods remove the pre applied inline styling..........

// uploadbtn.style.color = "red"; --separately
uploadbtn.style.cssText += "background-color: red; color: white;"; //+= also concatination and new css is added to the existing inline css