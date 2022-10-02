let username = document.getElementById("username");
let password = document.getElementById("password");
let flag = 1;

function formValidate(){
    if(username.value == ""){
        document.getElementById("userError").innerHTML = "Username is empty.";
        flag=0;
    }else if(username.value.length<5){
        document.getElementById("userError").innerHTML = "Username should atleast be 5 characters long.";
        flag=0;
    }else{
        document.getElementById("userError").innerHTML = "";
        flag=1;
    }
    
    if(password.value == ""){
        document.getElementById("passError").innerHTML = "Password cannot be empty.";
        flag=0;
    }else if(password.value.length<6){
        document.getElementById("passError").innerHTML = "Password should atleast be 6 characters long.";
        flag=0;
    }else{
        document.getElementById("passError").innerHTML = "";
        flag=1;
    }
    
    if(flag){
        return true;
    }else{
        return false;
    }
}