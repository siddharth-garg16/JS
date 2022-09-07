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