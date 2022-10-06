//we can import modules among each other too
import {credit} from "./account.js"


export default function(){
    console.log("Userdefault");
}
//default function has no name and each module file can only have one default function--export must be provided

export let name="Sidboi";
let age=22;
export function code(){
    console.log("Coding");
    credit();
}
function cook(){
    console.log("Cooking");
}
//only export things will be used by module