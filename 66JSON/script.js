//JSON is a text format for storing and transfering data.
//commonly used for API and config file

//data we get from server will be stored in a variable in string format inside ticks and then parsed to form javascript object
let receivedjsonData = `{
    "name":"Siddharth",
    "age":22,
    "language":["C++", "Python", "JavaScript"],
    "address":{
        "house":100,
        "street":"Random",
        "city":"Unknown"
    }
}`;

let dataObject = JSON.parse(receivedjsonData);
console.log(dataObject);
console.log(dataObject["name"]);
console.log(dataObject["age"]);
console.log(dataObject["language"]);
console.log(dataObject["address"]);
console.log(dataObject["address"]["city"]);

//we create a json string in order to send it to server
let student = {
    name:"Alpha",
    course:"Beta",
    section:"Gamma"
}
let tobesentjsonData = JSON.stringify(student);
console.log(tobesentjsonData);

