//alert, prompt and confirm functions are used for user interaction
// alert() - shows a message
//prompt() - shows a message, input text. it returns the text on ok or, if cancel button or esc is clicked, null.
//confrim() - shows a message confim with "OK" or "Cancel". It returns true for OK and false for esc/Cancel

// all these pause script execution and don't allow user to interact with the page until the window has been dismissed.
alert("Welcome!");

let user_name = prompt("Enter your name: ");
if(user_name != null){
    document.write(`Your name is ${user_name}`);
}

let response = confirm("Are you sure you want to delete?");
if(response){
    alert("Item deleted!");
}
