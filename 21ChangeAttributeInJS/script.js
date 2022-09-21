let btn = document.getElementById("btn");
btn.setAttribute("name", "form1");
btn.setAttribute("class", "formclass");
let value = btn.getAttribute("id");
console.log(value);
let val = btn.removeAttribute("name");
console.log(val); //true if attribute exists else false

