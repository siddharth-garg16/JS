let box = document.getElementById("box");
//offset include border, padding and margin
//client only include padding and not border and margin
let offsetwidth = box.offsetWidth;
let offsetheight = box.offsetHeight;
console.log(offsetwidth);
console.log(offsetheight);

let clientwidth = box.clientWidth;
let clientheight = box.clientHeight;
console.log(clientwidth);
console.log(clientheight);
