//Traverse--allows to jump to other elements using a given element--in this example element to parent element--lind of indirect access
let elm1 = document.getElementById("traverse");
// console.log(elm1);
let parent = elm1.parentElement; //can select child too by using firstChildElement-first child or children-all child elements or siblings by using previousElementSibling or nextElementSibling etc..
// console.log(parent);
parent.innerHTML = "Lists are gone!";

//-------------------------------------------------------------------
//Changing HTML with JS
let elm2 = document.getElementById("changeHTML");
// let content = elm2.innerHTML; //property--not a method
// console.log(elm2);
// console.log(content);
elm2.innerHTML = "<p>THIS IS A P TAG IN ALL CAPS.</p>"

//--------------------------------------------------------------------
//Create and Append element
let elm3 = document.getElementById("createappend");
let p = document.createElement("p");
p.className = "newtext"; //adds class to the new tag
p.id = "textid"; //adds id to the new tag
// let text = document.createTextNode("This is newly created and appended p tag.") //using method
// p.appendChild(text);
p.textContent = "This is newly created and appended p tag." //using property
elm3.appendChild(p);

//--------------------------------------------------------------------
//Insert before an element
let elm4 = document.getElementById("insert");
let pos = elm4.firstElementChild;
let insertp = document.createElement("p");
insertp.textContent = "This is inserted before first p tag.";
elm4.insertBefore(insertp, pos);

//---------------------------------------------------------------------
//Removing child element
let elm5 = document.getElementById("menu");
// let child1 = elm5.firstElementChild; --removes home
// elm5.removeChild(child1);
let child2 = elm5.firstElementChild.nextElementSibling; //removes products
elm5.removeChild(child2);

//----------------------------------------------------------------------
// Clone or Copy element
let elm6 = document.getElementById("items");
let cloneElm = elm6.cloneNode(true); // clones child element too--if false then only parent is cloned
// console.log(cloneElm);
cloneElm.id = "cloneditems"; //cloned will have this as an id--instead of items
document.body.appendChild(cloneElm);

//-----------------------------------------------------------------------
//Replace element in HTML
let elm7 = document.getElementById("teams");
let team = document.createElement("li");
team.textContent = "Bucks";
let replaced = elm7.firstElementChild.nextElementSibling.nextElementSibling;
elm7.replaceChild(team, replaced);

//------------------------------------------------------------------------
//Insert adjacent HTML --powerful--has four positions
let elm8 = document.getElementById("intro");
let html = "<h4>HTML</h4>"
elm8.insertAdjacentHTML("beforebegin", html);
elm8.insertAdjacentHTML("afterbegin", html);
elm8.insertAdjacentHTML("beforeend", html);
elm8.insertAdjacentHTML("afterend", html);










