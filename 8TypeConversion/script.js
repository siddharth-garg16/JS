let type = "5" + 2; //string ---52---- JS did it itself by taking 2 as string
let type2 = "5" - 2; //number ---3--- JS knew can't subtract from string so treated 5 as number
let type3 = "5"*"2"; //number ---10----
let type4 = "5"*"yes"; //number----NaN----- NaN is number too(imp)
alert(typeof type);
console.log(type);

// 1. String() ---- let var1 = String(4); --> "4"
// 2. Number() ---- let var2 = Number("yo") --> NaN
// 3. Boolean() ---- let var3 = Boolean(1); --> true etc. etc.