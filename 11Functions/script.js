// functions - pre defined and user defined

function mulTable(value){ //value is parameter
    for(let i=1; i<=10; i++){
        document.write(`${value} X ${i} = ${value*i}`);
        document.write("<br>");
    }
}
mulTable(5); //5 is argument
document.write("<br>");
mulTable(7); //7 is argument

function add_nums(a, b){ //multiparameter fucntion
    return a+b; //return value--can be used multiple ways
}


//-------------ARGUMENT OBJECT allows variable length parameters like *args in python/ it basically stores values of arguement in it..no matter how many-------
function add(){
    // console.log(arguments.length);
    let total = 0;
    if(arguments.length==0){
        console.log("No arguments passed");
    }else{
        for(let i=0; i<arguments.length; i++){
            total+=arguments[i];
        }
    }
    document.write(total);
    document.write("<br>"); 
}
let addition = add; //we can store function in variable as well
addition(1,2,3,4,5);
add(10, 100, 1000);

//global variables and local variables

let car = "Q3"; //global variable
function sum(){
    let result = 30; // local variable--local to that fucntion--can't use outside function
    console.log(car); //valid--because car is global
    console.log(result); //valid--beacuse car is local to sum()
}
console.log(car); //valid--because car is global
console.log(result); //invalid--beacuse car is local to sum() only


//------------ANONYMOUS FUNCTION---------------(nameless function)--used when we assign it to a variable because assigning is pointless if that function already has a name
//function expression - assigning function to a variable
let greet = function(){
    console.log("Hello World");
};
greet();

//usecase - js keeps record of function name--helps us in that case
setTimeout(function(){
    console.log("Hello World");
}, 3000); //time in millisecond


//--------------Immediately invoked functions----------
(function(){
    console.log("Anonymous");
    alert("Anonymous");
})();



