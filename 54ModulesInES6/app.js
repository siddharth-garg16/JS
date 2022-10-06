// import {name} from "./modules/user.js";
// import {code} from "./modules/user.js";
// import {age} from "./modules/user.js"; //error
// console.log(name);
// code();

//shortcut method
import {default as acc, withdraw as wd, credit} from "./modules/account.js";
//while importing dafault function must be given name
// withdraw(); //error since it is recognised as wd now
wd(); //like python--easier to resolve when function name from different js files are imported
credit();
acc();

//best way to import
import * as usr from "./modules/user.js";
usr.code(); 

//default can be used in different ways like when entire module functionality is called using one fucntion then we can make that function default





