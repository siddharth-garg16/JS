let input;
input = "";

// if(input===1){
//     document.write("continue....");
// }else if(input==="Yes"){
//     document.write("continue....");
// }else if(input==="Y"){
//     document.write("continue....");
// }else if(input===0){
//     document.write("abort!");
// }else if(input==="No"){
//     document.write("abort!");
// }else if(input==="N"){
//     document.write("abort!");
// }else{
//     document.write("Wrong Input");
// }

// === strict comparison is being used in switch...nothing else
switch(input){
    case 1:
        document.write("continue....");
        break;
    case "Yes":
        document.write("continue....");
        break;
    case "Y":
        document.write("continue....");
        break;
    //we can write abort cases too......
    default:
        document.write("Wrong Input"); //since last it will only get executed if none of the above cases are
}