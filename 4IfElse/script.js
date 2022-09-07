let age = 18;
let hasVoterCard = false;

if(age<18){
    console.log("Can't Vote");
}else if(hasVoterCard){
    console.log("Can Vote")
}else{
    console.log("Make a Voter Card");
}

// can obviously write nested ifs too like below
if(age<18){
    console.log("Can't Vote");
} else{
    if(hasVoterCard){
        console.log("Can Vote");
    } else{
        console.log("Get yourself a voter card");
    }
}

//ternary operator too
let voteEligibility = hasVoterCard==false ? "can't" : "can";
                                            //true      //false
// nullish coalescing operator
let user;
user = "Siddharth";
alert(user ?? "Guest User"); //incase user is undefined....helpful....
                                            