// let counter = 1;

// while(counter<=10){
//     document.write("WhileLoop ");
//     i++;
// } while loop


// let count = 15;
// do{
//     document.write("DOWHILE ")
// }while(count<=10); do while loop


// for(let i=1; i<=10; i++){
//     document.write("ForLoop");
// } for loop

//we can use nested loops and break and continue keywords too...usual.....

outer:for(let i=1; i<=10; i++){
    document.write(i);
    document.write("<br>");
    for(let j=1; j<=3; j++){
        if(j==3){
            break outer; //breaking outer loop through inner break
        }
        document.write("JS");
        document.write("<br>");
    }
}