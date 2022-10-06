export default function(){
    console.log("accountdefault");
}
//default function has no name and each module file can only have one default function--export must be provided

let account = "AC123456789";
let acc_type = "saving";

function withdraw(){
    console.log("Amount Deducted");
}
function credit(){
    console.log("Amount credited");
}

//shortcut method for export
export {withdraw, credit}